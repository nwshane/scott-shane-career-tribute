import Link from "next/link";
import Head from "../components/head";

export default () => (
  <div>
    <Head title="Scott Shane Opus" />

    <h1>Best of Scott Shane</h1>

    <div>INTRO TEXT GOES HERE</div>

    <Link href="/the-russia-years">The Russia Years →</Link>

    <style jsx global>{`
      body {
        font-family: "News Cycle", sans-serif;
      }
    `}</style>
  </div>
);
