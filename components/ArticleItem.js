import { groupBy } from "lodash";

import reflections from "../sheetData/reflections";
import { formatDate } from "../helpers";

const reflectionsByArticle = groupBy(reflections, "article");

export default ({ article }) => (
  <li className="container">
    <p className="line-above-title">
      {formatDate(article.date) || "No Date"} | {article.mediaCompany}
    </p>
    <h2 className="title">
      <a href={article.url || "#"} target="_blank">
        {article.title}
      </a>
    </h2>
    {article.excerpt && <div className="excerpt">{article.excerpt}</div>}
    <ul>
      {reflectionsByArticle[article.title] &&
        reflectionsByArticle[article.title].map(reflection => (
          <div key={reflection.reflection}>
            <h3>Reflections</h3>
            <div>
              {reflection.reflection
                .split("\n")
                .filter(paragraph => paragraph.trim() !== "")
                .map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
            </div>
            <p>- {reflection.name}</p>
          </div>
        ))}
    </ul>
    <style jsx>{`
      .container {
        margin-bottom: 40px;
        list-style-type: none;
        padding-left: 0;
      }
      .line-above-title {
        font-size: 13px;
        margin-bottom: -5px;
      }
      .title {
        font-size: 24px;
        margin: 0;
      }
      .excerpt {
        margin-left: 20px;
        margin-top: 15px;
      }
      .excerpt:before {
        content: "“";
        font-size: 30px;
      }
      .excerpt:after {
        content: "”";
      }
    `}</style>
  </li>
);
