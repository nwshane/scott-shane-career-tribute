import Head from "../components/head";
import articles from "../sheetData/articles";
import ArticleItem from "../components/ArticleItem";

export default () => (
  <div>
    <Head title="Scott Shane Opus" />
    <h1>Best of Scott Shane</h1>
    <ul className="articles-container">
      {articles.map(article => (
        <ArticleItem
          article={article}
          key={`${article.title}${article.notes}`}
        />
      ))}
    </ul>

    <style jsx>{`
      .articles-container {
        padding-left: 0;
      }
    `}</style>

    <style jsx global>{`
      body {
        font-family: "News Cycle", sans-serif;
      }
    `}</style>
  </div>
);
