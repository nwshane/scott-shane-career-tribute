import Head from "../components/head";
import articles from "../sheetData/articles";
import ArticleItem from "../components/ArticleItem";

export default () => (
  <div>
    <Head title="Scott Shane Opus" />
    <ul>
      {articles.map(article => (
        <ArticleItem
          article={article}
          key={`${article.title}${article.notes}`}
        />
      ))}
    </ul>

    <style jsx global>{`
      body {
        font-family: "News Cycle", sans-serif;
      }
    `}</style>
  </div>
);
