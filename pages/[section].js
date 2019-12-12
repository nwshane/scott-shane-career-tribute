import { useRouter } from "next/router";
import Link from "next/link";

import articles from "../sheetData/articles";
import Head from "../components/head";
import ArticleList from "../components/ArticleList";
import {
  getSections,
  getPreviousSectionName,
  urlify,
  getNextSectionName
} from "../helpers";

export default () => {
  const sections = getSections();
  const router = useRouter();

  const pageName = sections.find(
    sectionName => urlify(sectionName) === router.query.section
  );

  if (!pageName) return null;

  const previousPageName = getPreviousSectionName(sections, pageName);
  const previousPagePath = previousPageName && urlify(previousPageName);
  const nextPageName = getNextSectionName(sections, pageName);
  const nextPagePath = nextPageName && urlify(nextPageName);

  return (
    <div>
      <Head title={pageName} />
      {previousPageName ? (
        <p>
          <Link href={`/${previousPagePath}`}>
            <a>← {previousPageName}</a>
          </Link>
        </p>
      ) : (
        <p>
          <Link href="/">
            <a>← Intro</a>
          </Link>
        </p>
      )}
      {nextPageName && (
        <p>
          <Link href={`/${nextPagePath}`}>
            <a>→ {nextPageName}</a>
          </Link>
        </p>
      )}

      <h1>{pageName}</h1>

      <ArticleList
        articles={articles.filter(article => article.section === pageName)}
      />

      {/* copied from above; todo: make into component */}
      {previousPageName ? (
        <p>
          <Link href={`/${previousPagePath}`}>
            <a>← {previousPageName}</a>
          </Link>
        </p>
      ) : (
        <p>
          <Link href="/">
            <a>← Intro</a>
          </Link>
        </p>
      )}
      {nextPageName && (
        <p>
          <Link href={`/${nextPagePath}`}>
            <a>→ {nextPageName}</a>
          </Link>
        </p>
      )}

      <style jsx global>{`
        body {
          font-family: "News Cycle", sans-serif;
        }
      `}</style>
    </div>
  );
};
