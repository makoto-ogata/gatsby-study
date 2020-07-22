const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogresult = await graphql(`
    query {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            id
            slug
          }
          next {
            title
            slug
          }
          previous {
            title
            slug
          }
        }
      }
      allContentfulCategory {
        edges {
          node {
            categorySlug
            id
            category
          }
        }
      }
    }
  `)

  if (blogresult.errors) {
    reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました`)
  }

  blogresult.data.allContentfulBlogPost.edges.forEach(
    ({ node, next, previous }) => {
      createPage({
        path: `/blog/post/${node.slug}/`,
        component: path.resolve(`./src/templates/blogpost-template.js`),
        context: {
          id: node.id,
          next,
          previous,
        },
      })
    }
  )

  const blogPostsPerPage = 6
  const blogPosts = blogresult.data.allContentfulBlogPost.edges.length
  const blogPages = Math.ceil(blogPosts / blogPostsPerPage)

  Array.from({length: blogPages}).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        skip: blogPostsPerPage * i,
        limit: blogPostsPerPage,
        currentPage: i + 1,
        isFirst: i + 1 === 1,
        isLast: i + 1 === blogPages,
      },
    })
  })

  blogresult.data.allContentfulCategory.edges.forEach(({ node }) => {
    createPage({
      path: `/cat/${node.categorySlug}/`,
      component: path.resolve(`./src/templates/cat-template.js`),
      context: {
        catid: node.id,
        catname: node.category,
        skip: 0,
        limit: 100,
        currentPage: 1,
        isFirst: true,
        isLast: true,
      },
    })
  })
}