export default ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 10px;
      }

      :global(body) {
        font-family: "News Cycle", sans-serif;
        margin: 0;
        background: url("/static/paper.png");
        color: #333;
      }

      :global(p) {
        margin: 0;
      }

      :global(img) {
        max-width: 100%;
      }

      :global(a) {
        text-decoration: none;
        color: #326891;
      }
    `}</style>
  </div>
);
