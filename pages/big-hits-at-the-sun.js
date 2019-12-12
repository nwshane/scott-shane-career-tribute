import { uniq } from "lodash";
import Link from "next/link";

import articles from "../sheetData/articles";
import Head from "../components/head";
import ArticleList from "../components/ArticleList";

const sections = uniq(
  Object.values(articles).map(article => article.section)
).filter(x => !!x);

const urlify = str => str.replace(/\s/g, "-").toLowerCase();

const pageName = sections[2];
const previousPageName = sections[0];
const previousPagePath = urlify(previousPageName);

export default () => (
  <div>
    <Head title={pageName} />
    <Link href={`/${previousPagePath}`}>
      <a>← {previousPageName}</a>
    </Link>
    <h1>{pageName}</h1>

    <ArticleList
      articles={articles.filter(article => article.section === pageName)}
    />

    <style jsx global>{`
      body {
        font-family: "News Cycle", sans-serif;
      }
    `}</style>
  </div>
);
