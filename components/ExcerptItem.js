import { useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";

export default ({ excerpt, allowMinimize = false }) => {
  const [fullTextIsVisible, setFullTextIsVisible] = useState(!allowMinimize);

  const preparedText = excerpt
    .split("\n")
    .filter(paragraph => paragraph.trim() !== "");

  return (
    <>
      {fullTextIsVisible ? (
        <div className="excerpt">
          {preparedText.map((paragraph, paragraphIndex) => (
            <p className="paragraph" key={paragraphIndex}>
              {paragraph}
            </p>
          ))}
          {allowMinimize && (
            <button onClick={() => setFullTextIsVisible(false)}>
              Hide excerpt
            </button>
          )}
        </div>
      ) : (
        <div className="excerpt excerpt-short">
          <div className="ellipsis-container">
            <LinesEllipsis
              text={preparedText[0]}
              maxLine="1"
              ellipsis="..."
              trimRight
              basedOn="words"
            />
          </div>
          <button
            className="show-full-button"
            onClick={() => setFullTextIsVisible(true)}
          >
            Show excerpt
          </button>
        </div>
      )}
      <style jsx>{`
        .excerpt {
          margin-top: 30px;
          position: relative;
        }
        .excerpt-short {
          display: flex;
          justify-content: flex-start;
        }
        .ellipsis {
          width: 80%;
          text-align: justify;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-right: 10px;
        }
        .excerpt:before {
          position: absolute;
          content: "”";
          font-size: 200px;
          top: -125px;
          left: -7px;
          color: rgba(0, 0, 0, 0.1);
          z-index: -1;
        }
        .paragraph {
          margin-bottom: 15px;
        }
        button {
          color: #326891;
          padding: 0;
          margin: 0;
          background: none;
          font-size: inherit;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }

        .ellipsis-container {
          max-width: 80%;
          margin-right: 10px;
        }
      `}</style>
    </>
  );
};
