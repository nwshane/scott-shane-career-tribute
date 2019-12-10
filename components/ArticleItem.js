import { groupBy } from "lodash";

import reflections from "../sheetData/reflections";
import { formatDate } from "../helpers";

const reflectionsByArticle = groupBy(reflections, "article");

export default ({ article }) => (
  <div className="container">
    <p className="line-above-title">
      {formatDate(article.date) || "No Date"} | {article.mediaCompany}
    </p>
    <h2 className="title">
      <a href={article.url || "#"} target="_blank">
        {article.title}
      </a>
    </h2>
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
    <style jsx>{`
      .container {
        margin-bottom: 40px;
      }
      .line-above-title {
        font-size: 13px;
        margin-bottom: 0px;
      }
      .title {
        font-size: 24px;
        margin: 0;
        margin-top: -5px;
      }
    `}</style>
  </div>
);
