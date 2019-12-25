export default ({ excerpt }) => {
  return (
    <div className="excerpt">
      {excerpt
        .split("\n")
        .filter(paragraph => paragraph.trim() !== "")
        .map((paragraph, paragraphIndex) => (
          <p className="paragraph" key={paragraphIndex}>
            {paragraph}
          </p>
        ))}
      <style jsx>{`
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
        .paragraph {
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
};
