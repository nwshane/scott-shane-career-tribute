import Link from "next/link";

import Head from "../components/head";
import Layout from "../components/Layout";
import { getSections, urlify } from "../helpers";

export default () => {
  const sections = getSections();
  const firstSectionName = sections[0];
  const firstSectionPath = firstSectionName && urlify(firstSectionName);

  return (
    <Layout>
      <Head title="Scott Shane Opus" />

      <h1>Best of Scott Shane</h1>

      <div>INTRO TEXT GOES HERE</div>

      <p>
        <Link href={`/${firstSectionPath}`}>
          <a>→ {firstSectionName}</a>
        </Link>
      </p>
    </Layout>
  );
};
