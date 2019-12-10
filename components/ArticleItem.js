import { groupBy } from "lodash";

import reflections from "../sheetData/reflections";
import { formatDate } from "../helpers";

const reflectionsByArticle = groupBy(reflections, "article");

export default ({ article }) => (
  <div key={`${article.title}${article.notes}`}>
    <h2>
      <a href={article.url || "#"} target="_blank">
        {article.title}
      </a>
    </h2>
    <p>{article.mediaCompany}</p>
    <p>{formatDate(article.date)}</p>
    {article.excerpt && <div>Excerpt: {article.excerpt}</div>}
    <ul>
      {reflectionsByArticle[article.title] &&
        reflectionsByArticle[article.title].map(reflection => (
          <div key={reflection.reflection}>
            <h3>Reflections</h3>
            <div>{reflection.reflection}</div>
            <p>- {reflection.name}</p>
          </div>
        ))}
    </ul>
  </div>
);
