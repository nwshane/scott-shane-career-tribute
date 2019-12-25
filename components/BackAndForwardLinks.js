import Link from "next/link";
import {
  getSections,
  getPreviousSectionName,
  urlify,
  getNextSectionName
} from "../helpers";

export default ({ pageName }) => {
  const sections = getSections();
  const previousPageName = getPreviousSectionName(sections, pageName);
  const previousPagePath = previousPageName && urlify(previousPageName);
  const nextPageName = getNextSectionName(sections, pageName);
  const nextPagePath = nextPageName && urlify(nextPageName);

  return (
    <div className="container">
      {previousPageName ? (
        <div className="previous">
          <p>
            <Link href="/">
              <a>← Back to Beginning</a>
            </Link>
          </p>
          <p>
            <Link href={`/${previousPagePath}`}>
              <a>← {previousPageName}</a>
            </Link>
          </p>
        </div>
      ) : (
        <p className="previous">
          <Link href="/">
            <a>← Intro</a>
          </Link>
        </p>
      )}
      {nextPageName && (
        <p className="next">
          <Link href={`/${nextPagePath}`}>
            <a>{nextPageName} →</a>
          </Link>
        </p>
      )}

      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
        }
        .previous {
          max-width: 45%;
        }
        .next {
          max-width: 45%;
        }
      `}</style>
    </div>
  );
};
