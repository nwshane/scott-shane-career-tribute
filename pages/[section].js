import Link from "next/link";

import articles from "../sheetData/articles";
import Head from "../components/head";
import ArticleList from "../components/ArticleList";
import { getSections, getPreviousSectionName, urlify } from "../helpers";

const sections = getSections(articles);

export default () => {
  const pageName = sections[2];
  const previousPageName = getPreviousSectionName(sections, pageName);
  const previousPagePath = urlify(previousPageName);

  return (
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
};
