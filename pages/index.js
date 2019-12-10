import { groupBy } from "lodash";

import Head from "../components/head";
import articles from "../sheetData/articles";
import reflections from "../sheetData/reflections";
import { formatDate } from "../helpers";

const reflectionsByArticle = groupBy(reflections, "article");

export default () => (
  <div>
    <Head title="Think of Site Name" />
    <ul>
      {articles.map(article => (
        <div key={`${article.title}${article.notes}`}>
          <h2>{article.title}</h2>
          <p>{formatDate(article.date)}</p>
          <ul>
            {reflectionsByArticle[article.title] &&
              reflectionsByArticle[article.title].map(reflection => (
                <div>
                  <div>{reflection.reflection}</div>
                  <p>- {reflection.name}</p>
                </div>
              ))}
          </ul>
        </div>
      ))}
    </ul>

    <style jsx>{`
      .hero {
      }
    `}</style>
  </div>
);
