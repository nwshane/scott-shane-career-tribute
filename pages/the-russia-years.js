import Link from "next/link";

import articles from "../sheetData/articles";
import Head from "../components/head";
import ArticleList from "../components/ArticleList";

export default () => (
  <div>
    <Head title="The Russia Years" />
    <p>
      <Link href="/">← Intro</Link>
    </p>
    <p>
      <Link href="/big-hits-at-the-sun">→ Big hits at the Sun</Link>
    </p>
    <h1>The Russia Years</h1>

    <ArticleList articles={articles} />

    <style jsx global>{`
      body {
        font-family: "News Cycle", sans-serif;
      }
    `}</style>
  </div>
);
