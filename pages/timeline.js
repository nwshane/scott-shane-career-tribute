import Link from "next/link";
import { sortBy } from "lodash";

import Head from "../components/head";
import Layout from "../components/Layout";
import { formatDate } from "../helpers";
import articles from "../sheetData/articles";
import ExcerptItem from "../components/ExcerptItem";

const orderedArticles = sortBy(articles, article => new Date(article.date));

export default () => {
  return (
    <Layout>
      <Head title="Timeline" />

      <p>
        <Link href="/">
          <a>← Intro</a>
        </Link>
      </p>

      <h1>The Journalism of Scott Shane Over Time</h1>

      <div className="articles">
        {orderedArticles.map(article => (
          <div className="container" key={article.title}>
            <p className="line-above-title">
              {formatDate(article.date) || "No Date"} | {article.mediaCompany}
            </p>
            <h2 className="title">
              <a href={article.url || "#"} target="_blank">
                {article.title}
              </a>
            </h2>
            {article.excerpt && (
              <ExcerptItem excerpt={article.excerpt} allowMinimize />
            )}
          </div>
        ))}
      </div>

      <p>
        <Link href="/">
          <a>← Intro</a>
        </Link>
      </p>
      <style jsx>{`
        .articles {
          margin-bottom: 50px;
        }
        .container {
          margin-bottom: 45px;
          list-style-type: none;
          padding-left: 0;
        }
        .line-above-title {
          font-size: 13px;
          margin-bottom: -5px;
        }
        .title {
          font-size: 24px;
          margin: 0;
          margin-bottom: 20px;
          text-decoration: underline;
        }
      `}</style>
    </Layout>
  );
};
