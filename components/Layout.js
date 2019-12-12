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
      }

      :global(p) {
        margin: 0;
      }
    `}</style>
  </div>
);
