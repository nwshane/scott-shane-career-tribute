import Head from "../components/head";
import articles from "../sheetData/articles";
import { formatDate } from "../helpers";

export default () => (
  <div>
    <Head title="Think of Site Name" />
    <ul>
      {articles.map(article => (
        <div key={`${article.title}${article.notes}`}>
          <h2>{article.title}</h2>
          <p>{formatDate(article.date)}</p>
        </div>
      ))}
    </ul>

    <style jsx>{`
      .hero {
      }
    `}</style>
  </div>
);
