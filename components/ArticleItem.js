import { groupBy } from "lodash";

import allReflections from "../sheetData/reflections";
import { formatDate } from "../helpers";

const reflectionsByArticle = groupBy(allReflections, "article");

export default ({ article }) => {
  const reflections = reflectionsByArticle[article.title];

  return (
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
      {reflections && (
        <div className="reflections">
          <ul className="reflections-list">
            {reflections.map(reflection => (
              <div className="reflection" key={reflection.reflection}>
                <div className="reflection-text">
                  {reflection.reflection
                    .split("\n")
                    .filter(paragraph => paragraph.trim() !== "")
                    .map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                </div>
                <p className="reflection-name">- {reflection.name}</p>
              </div>
            ))}
          </ul>
        </div>
      )}
      <style jsx>{`
        .container {
          margin-bottom: 70px;
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
          text-decoration: underline;
        }
        .excerpt {
          margin-top: 30px;
          position: relative;
        }
        .excerpt:before {
          position: absolute;
          content: "”";
          font-size: 200px;
          top: -125px;
          left: -7px;
          color: rgba(0, 0, 0, 0.1);
        }
        .reflections {
          margin-left: 40px;
          margin-top: 30px;
        }
        .reflections-list {
          padding: 0;
        }
        .reflection {
          margin-bottom: 30px;
        }
        .reflection-text {
          font-style: italic;
        }
        .reflection-name {
          font-weight: 800;
          padding-left: 60%;
          margin-top: 10px;
        }
      `}</style>
    </li>
  );
};
