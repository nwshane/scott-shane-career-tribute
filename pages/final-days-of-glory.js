import { useRouter } from "next/router";

import Head from "../components/head";
import Layout from "../components/Layout";
import BackAndForwardLinks from "../components/BackAndForwardLinks";
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

  return (
    <Layout>
      <Head title={pageName} />
      <BackAndForwardLinks pageName={pageName} />

      <h1>{pageName}</h1>

      <img
        alt="Letter from New York Times publisher A. G. Sulzberger"
        className="letter"
        src="/static/images/letter-from-the-publisher.jpg"
      />
    </Layout>
  );
};
