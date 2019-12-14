import { useRouter } from "next/router";

import articles from "../sheetData/articles";
import Head from "../components/head";
import Layout from "../components/Layout";
import ArticleList from "../components/ArticleList";
import BackAndForwardLinks from "../components/BackAndForwardLinks";
import { getSections, urlify } from "../helpers";

export default () => {
  const sections = getSections();
  const router = useRouter();

  const pageName = sections.find(
    sectionName => urlify(sectionName) === router.query.section
  );

  if (!pageName) return null;

  return (
    <Layout>
      <Head title={pageName} />
      <BackAndForwardLinks pageName={pageName} />

      <h1>{pageName}</h1>

      <ArticleList
        articles={articles.filter(article => article.section === pageName)}
      />

      <BackAndForwardLinks pageName={pageName} />
    </Layout>
  );
};
