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
        <div>
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
        <p>
          <Link href="/">
            <a>← Intro</a>
          </Link>
        </p>
      )}
      {nextPageName && (
        <p>
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
      `}</style>
    </div>
  );
};
