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
      <Head />

      <h1>And Another Toast: To the Journalism of Scott Shane</h1>

      <div className="intro">
        <p>Dear dad,</p>
        <p>
          I'm going to wait until the webpage is done before writing this intro
          text. That's okay though because hopefully you won't see this until
          it's done! :)
        </p>
        <p>
          Love, <br></br>Nathan + all your family and friends who contributed to
          this project
        </p>
        <p>December XX, 2019 ---- ADD DATE!</p>
      </div>

      <div className="navigation">
        <p>
          <Link href={`/${firstSectionPath}`}>
            <a>View Articles and Reflections →</a>
          </Link>
        </p>
        <p>
          <Link href={"/timeline"}>
            <a>View Timeline of All Articles →</a>
          </Link>
        </p>
      </div>
      <style jsx>{`
        .intro p {
          margin: 20px 0;
        }

        .navigation {
          margin-top: 40px;
        }
      `}</style>
    </Layout>
  );
};
