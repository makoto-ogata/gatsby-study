import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default () => (
  <Layout>
    <div className="eyecatch">
      <figure>
        <img src="images-baseblog/eyecatch.jpg" alt="アイキャッチ画像の説明" />
      </figure>
    </div>
    <article className="content">
      <div className="container">
        <h1 className="bar">記事のタイトル</h1>
        <aside className="info">
          <time dateTime="XXXX-XX-XX">
            <FontAwesomeIcon icon={faClock} />
            XXXX年XX月XX日
          </time>
          <div className="cat">
            <FontAwesomeIcon icon={faFolderOpen} />
            <ul>
              <li className="スラッグ">カテゴリーＡ</li>
              <li className="スラッグ">カテゴリーＢ</li>
            </ul>
          </div>
        </aside>
        <div className="postbody">
          <p>
            記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
            記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
            記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
          </p>
        </div>
        <ul className="postlink">
          <li className="prev">
            <a href="base-blogpost.html" rel="prev">
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>前の記事</span>
            </a>
          </li>
          <li className="next">
            <a href="base-blogpost.html" rel="next">
              <span>次の記事</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </li>
        </ul>
      </div>
    </article>
  </Layout>
)