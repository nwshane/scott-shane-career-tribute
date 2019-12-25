import Link from "next/link";

import Head from "../components/head";
import Layout from "../components/Layout";
import { getSections, urlify } from "../helpers";

const letterTextPart1 = `
Dear dad,

I have a confession to make. The stories of yours that appealed to me most as a kid weren’t the ones published in the newspaper; they were the ones that made you seem like a secret spy or a snooping detective, worthy of the big screen. I was riveted when you told me about the last moments of your trip to Switzerland to investigate the NSA’s dealings. I could clearly imagine someone passing you a bundle right before you flew home, and the epic cinematic music in the background as you rifled through the documents on the flight and realized how important they were. Or the time when you were reporting on a gathering during the fall of the Soviet Union, and you protested to a police officer with his baton raised that you were an American journalist—which just seemed to encourage him! (The cinematic music and the raised baton might have been my own embellishments.)

Of course, I had to act like I wasn’t *that* impressed when I was around my friends. You came to speak to my middle school once, and you joked about how I had insisted that you not reveal our familial connection, which led to the following conversation with a friend later in the day:

Jon: "What did you think of your dad this morning?"
Nathan: *rolls eyes*.
Jon: "I thought he was funny!"
Nathan: *tries to prevent proud smile from coming to face with all the self-control he can muster*

So, I confess. Not only did I enjoy your stories from the field, I also enjoyed having a parent with one of the coolest jobs around—and who did it pretty darn well, too.

I think it took me a little while to realize that your stories weren’t just ending up in our home, but were actually read by thousands of people in a big old newspaper every day! At my recent meditation retreat, one of the activities with which my mind distracted itself was to brainstorm ideas of things I could do to celebrate your journalistic career. I thought about the stories you had written over the course of four decades, how they could become harder and harder to locate with time, and how I didn’t want all that writing to just disappear into the void. I also wanted to show you how meaningful your work has been to the people in your life—which, of course, make up just a tiny percentage of the readers affected by your writing.

So, when I got home a few weeks ago, I started to create this website with the help of your friends, colleagues, and relatives. We’ve all worked together to compile some of your best work from the last forty odd years. (Thanks to some sneakiness by Rebecca, you even contributed to this website yourself!) On the timeline page, you’ll find a chronological list of many of your articles, including the name of the article, the date it was published, the newspaper that published it, and a link to the text. You can send this page to anyone who inquires about your journalism—unless you’re too modest, of course, in which case my response would be...
`;

const letterTextPart2 = `
(Props to Martha for the gif)
Anyway! Besides the timeline, the main part of this website is a series of pages, each of which groups your articles according to a certain theme. Many of us have written responses to individual pieces, telling you what the story meant to us, and these reflections are shown along with an excerpt from the article.

The pieces represented on this site are bound to tell an incomplete story of your career, especially the early years. (I wasn’t able to find any pieces of yours from the Washington Star, sadly.) If you notice that a favorite story of yours is missing, just say the word and I’ll add it to the site.

The process of creating this site has brought me an even deeper appreciation for the breadth and depth of the work you’ve done throughout your career. Despite our family's jokes, it seems you’ve been much more than an expert on torture! Healthcare, the drug trade, the crimes of the Russian government, school board drama in North Carolina—it’s hard to find a subject that has escaped the pen of Scott Shane. I hope that this tribute to your journalism from a few of the people who have enjoyed the fruits of your work will thoroughly delight and embarrass you. We’re all excited to see what you do next! (Especially the photos from New Zealand.)

May we join the people of the post-Soviet era in yet another toast, Georgian style:

Scott-s gaumar… jos! Gaumar… jos! Gaumar… jos!
`;

export default () => {
  const sections = getSections();
  const firstSectionName = sections[0];
  const firstSectionPath = firstSectionName && urlify(firstSectionName);

  return (
    <Layout>
      <Head title="Dear Dad" />

      <h1>And Another Toast: To the Journalism of Scott Shane</h1>

      <div className="intro">
        {letterTextPart1
          .split("\n")
          .filter(paragraph => paragraph.trim() !== "")
          .map((paragraph, paragraphIndex) => (
            <p className="paragraph" key={paragraphIndex}>
              {paragraph}
            </p>
          ))}
        <img
          src="/static/images/scott-shane-exasperated.gif"
          alt="Scott Shane rolls his eyes"
        ></img>
        {letterTextPart2
          .split("\n")
          .filter(paragraph => paragraph.trim() !== "")
          .map((paragraph, paragraphIndex) => (
            <p className="paragraph" key={paragraphIndex}>
              {paragraph}
            </p>
          ))}
        <p className="paragraph">
          Love, <br></br>Nathan
        </p>
        <p>December 24, 2019</p>
      </div>

      <div className="navigation">
        <p>
          <Link href={`/${firstSectionPath}`}>
            <a>View Articles, Excerpts, and Reflections →</a>
          </Link>
        </p>
        <p>
          <Link href={"/timeline"}>
            <a>View Timeline of All Articles →</a>
          </Link>
        </p>
      </div>
      <style jsx>{`
        .paragraph {
          margin-bottom: 15px;
        }

        .navigation {
          margin-top: 40px;
        }
      `}</style>
    </Layout>
  );
};
