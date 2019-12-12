import Link from "next/link";

import Head from "../components/head";
import { getSections, urlify } from "../helpers";

export default () => {
  const sections = getSections();
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
