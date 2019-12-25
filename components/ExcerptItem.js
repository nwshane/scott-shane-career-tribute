import { useState } from "react";

export default ({ excerpt }) => {
  // const [showFull, setCount] = useState(0);
  const showFull = true;

  const preparedText = excerpt
    .split("\n")
    .filter(paragraph => paragraph.trim() !== "");

  return (
    <>
      {showFull ? (
        <div className="excerpt">
          {preparedText.map((paragraph, paragraphIndex) => (
            <p className="paragraph" key={paragraphIndex}>
              {paragraph}
            </p>
          ))}
        </div>
      ) : (
        <div className="excerpt">
          <p className="paragraph ellipsis">{preparedText[0]}</p>
        </div>
      )}
      <style jsx>{`
        .excerpt {
          margin-top: 30px;
          position: relative;
        }
        .ellipsis {
          height: 2em;
          max-width: 90%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .excerpt:before {
          position: absolute;
          content: "”";
          font-size: 200px;
          top: -125px;
          left: -7px;
          color: rgba(0, 0, 0, 0.1);
        }
        .paragraph {
          margin-bottom: 15px;
        }
      `}</style>
    </>
  );
};
