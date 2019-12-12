import { useRouter } from "next/router";
import Link from "next/link";

import Head from "../components/head";
import Layout from "../components/Layout";
import {
  getSections,
  getPreviousSectionName,
  urlify,
  getNextSectionName
} from "../helpers";

export default () => {
  const sections = getSections();
  const router = useRouter();

  const pageName = sections.find(sectionName =>
    router.pathname.includes(urlify(sectionName))
  );

  if (!pageName) return null;

  const previousPageName = getPreviousSectionName(sections, pageName);
  const previousPagePath = previousPageName && urlify(previousPageName);
  const nextPageName = getNextSectionName(sections, pageName);
  const nextPagePath = nextPageName && urlify(nextPageName);

  return (
    <Layout>
      <Head title={pageName} />
      {previousPageName ? (
        <p>
          <Link href={`/${previousPagePath}`}>
            <a>← {previousPageName}</a>
          </Link>
        </p>
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
            <a>→ {nextPageName}</a>
          </Link>
        </p>
      )}

      <h1>{pageName}</h1>

      <img
        alt="Letter from New York Times publisher A. G. Sulzberger"
        className="letter"
        src="/static/images/letter-from-the-publisher.jpg"
      />
    </Layout>
  );
};
