import ArticleItem from "./ArticleItem";

export default ({ articles }) => (
  <div>
    <ul className="articles-container">
      {articles.map(article =>
        article.title === "***NEED HELP FINDING!***" ? null : (
          <ArticleItem
            article={article}
            key={`${article.title}${article.notes}`}
          />
        )
      )}
    </ul>

    <style jsx>{`
      .articles-container {
        padding-left: 0;
      }
    `}</style>
  </div>
);
