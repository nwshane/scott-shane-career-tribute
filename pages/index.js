import Link from "next/link";

import Head from "../components/head";
import { getSections, urlify } from "../helpers";
import articles from "../sheetData/articles";

export default () => {
  const sections = getSections(articles);
  const firstSectionName = sections[0];
  const firstSectionPath = firstSectionName && urlify(firstSectionName);

  return (
    <div>
      <Head title="Scott Shane Opus" />

      <h1>Best of Scott Shane</h1>

      <div>INTRO TEXT GOES HERE</div>

      <p>
        <Link href={`/${firstSectionPath}`}>
          <a>→ {firstSectionName}</a>
        </Link>
      </p>

      <style jsx global>{`
        body {
          font-family: "News Cycle", sans-serif;
        }
      `}</style>
    </div>
  );
};
