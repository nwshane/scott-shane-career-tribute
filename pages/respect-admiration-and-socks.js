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

const rebeccaElisabethTribute = `
We’re still in denial, but Scott Shane has insisted on retiring to write books and teach. Friday is his official last day.

Scott’s versatile skills — a great conceptual thinker, deep digger and terrific writer — have made him an invaluable player at The Times. He took on ambitious projects that required tenacious reporting, delivered rich profiles, churned out news articles and produced crystal-clear explanatory stories.

He often rewrote history — a colleague joked he broke news about things that happened 100 years ago — to explain disclosures that cast new light on long-ago events. He developed an abiding interest in the dark side, reporting about terrorists, traitors, liars and spies. He occasionally liberated himself to do book reviews, write an arts story about a junkyard poet of giant whirligigs or conduct a live interview with a scary-seeming Jennifer Lawrence about playing a Russian assassin.

Scott arrived at the bureau after working at The Baltimore Sun, where he had served as a foreign correspondent in Moscow, worked the medical beat and investigated a secretive intelligence outfit that not many people knew much about back then — the huge National Security Agency, just down the road from Baltimore. All of that would come in handy, it turned out, for his 15-year tenure at The Times, where he worked in Washington on national security coverage and later for the Investigations team in New York.

His expertise made him a key player in a trilogy about the Russian election interference in 2016 -– the Russian hacking of Democrats’ emails, the manipulation of social media, and a reconstruct of how it all happened. He shared in two Pulitzer Prizes for that work, and a Polk Award for a related story. Earlier, he was enlisted to report about the WikiLeaks cache of leaked diplomatic cables and Edward Snowden’s stolen N.S.A. files. He chronicled America’s campaign to deliver death by drone, tracking the civilian casualties that resulted. He was drafted to write explanatory stories on subjects ranging from Saudi Arabia’s export of intolerance to how Amazon had insinuated itself into nearly every aspect of life in a typical American city. Dean Baquet called him one of the best practitioners of the genre that The Times has ever had.

Asked to recount his Times experience, Scott said this:

Thinking back, after being rescued from the fast-shrinking Baltimore Sun in 2004 I mostly focused on torture under Bush, targeted killing under Obama and Russian election subversion under Trump — such a cheerful bunch of subjects! I once took a ride in a former C.I.A. pilot's homemade two-person biplane, hanging on for dear life in the breeze as he performed barrel rolls and flew upside down. I pocket-dialed my daughter from Yemen, and she heard a conversation about kidnapping (very big in Sanaa at the time) and wondered if she needed to call The N.Y.T. or the F.B.I. I drove into the C.I.A. campus on the wrong road and found myself looking at two big, nervous guys glaring at me and pointing very big guns at me while I hit the brakes and thought, “This interview really isn't worth dying for.” Private Manning's splendid gift of a quarter million diplomatic cables ruined my Thanksgiving in 2010. I spent the summer of '13 locked in a high-security closet on the 16th floor of the Times Building in New York with colleagues hunting for stories in Snowden's N.S.A. documents.

I joined Food Club, where fellow eaters learned to fear my dishes that often featured garden-grown hot peppers. I switched from the bureau to Investigations but kept lurking around the bureau, strategically located across from the coffee machine where I got first choice of all treats placed there. I stuck with my 1 hour, 45 minute one-way commute (longer when the rail gods frowned on us) full time for maybe 12 years before discovering the joys of working from the Baltimore sub-bureau. But the great draw of the D.C. bureau has always been comparing notes on real life with fantastic colleagues, sharing a laugh and every so often writing actual newspaper stories together.

When hearing the news of Scott’s planned departure, multiple colleagues responded by saying what a huge loss it would be for The Times. One bureau member offered: “He’s such a mensch. I love that guy!” Numerous reporters said they saw him as a role model. The phrase “so nice” came up a lot. Scott would howl if he heard any of that, but his skills, collegial attitude and generous spirit were widely admired. We will indeed miss him.

An appropriate sendoff will be held in the Washington bureau on Jan. 9, between episodes of the impeachment saga on Capitol Hill. Scott will make a farewell visit to the New York office later this week. Please wish him your best.

Rebecca and Elisabeth
`;

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
      <blockquote className="twitter-tweet" data-lang="en">
        <p lang="en" dir="ltr">
          As some kind Twitter folk have noticed, I&#39;m retiring from the NYT
          at year&#39;s end to do some teaching, writing and who knows what.
          I&#39;ve had 15 terrific years at the Times, thanks to unmatched
          editors and astonishing colleagues. And 40 years in journalism, a good
          round number.
        </p>
        &mdash; Scott Shane (@ScottShaneNYT){" "}
        <a href="https://twitter.com/ScottShaneNYT/status/1206705734915907586?ref_src=twsrc%5Etfw">
          December 16, 2019
        </a>
      </blockquote>

      <blockquote
        className="twitter-tweet"
        data-conversation="none"
        data-lang="en"
      >
        <p lang="en" dir="ltr">
          Nope, still in denial. Can’t accept this. Not happening. Won’t let it.
          Rebecca and I are working on a human blockade. Good luck getting past
          us.
        </p>
        &mdash; Nicole Perlroth (@nicoleperlroth){" "}
        <a href="https://twitter.com/nicoleperlroth/status/1206726496481472512?ref_src=twsrc%5Etfw">
          December 17, 2019
        </a>
      </blockquote>

      <blockquote
        className="twitter-tweet"
        data-conversation="none"
        data-lang="en"
      >
        <p lang="en" dir="ltr">
          I still remember sending you out to cover a skate park opening on
          weekend duty when I was filling in as editor. I was nervous. You were
          cool, and filed a great story. Loved following your work. You’re a
          great journalist and an even better person!
        </p>
        &mdash; Rona Kobell (@rkobell){" "}
        <a href="https://twitter.com/rkobell/status/1206722580025135105?ref_src=twsrc%5Etfw">
          December 16, 2019
        </a>
      </blockquote>

      <blockquote
        className="twitter-tweet"
        data-conversation="none"
        data-lang="en"
      >
        <p lang="en" dir="ltr">
          One of the best people and reporters I ever had the pleasure to work
          with. Happy next chapter. I’ll be stunned if it isn’t brilliant.
        </p>
        &mdash; Michael Littwin (@mike_littwin){" "}
        <a href="https://twitter.com/mike_littwin/status/1206737278623764480?ref_src=twsrc%5Etfw">
          December 17, 2019
        </a>
      </blockquote>

      <blockquote
        className="twitter-tweet"
        data-conversation="none"
        data-lang="en"
      >
        <p lang="en" dir="ltr">
          Hard to believe! But there is life after the paper. There is.
        </p>
        &mdash; David E. Hoffman (@thedeadhandbook){" "}
        <a href="https://twitter.com/thedeadhandbook/status/1206745916515979265?ref_src=twsrc%5Etfw">
          December 17, 2019
        </a>
      </blockquote>

      <blockquote className="twitter-tweet" data-lang="en">
        <p lang="en" dir="ltr">
          Congratulations Scott! Glad to have worked at two newspapers with one
          of the finest journalists and human beings I have known.
        </p>
        &mdash; Ivan Penn (@ivanlpenn){" "}
        <a href="https://twitter.com/ivanlpenn/status/1206982540470321152?ref_src=twsrc%5Etfw">
          December 17, 2019
        </a>
      </blockquote>

      <blockquote
        className="twitter-tweet"
        data-conversation="none"
        data-lang="en"
      >
        <p lang="en" dir="ltr">
          An era ends! Scott, I’ll never forget staying late on the desk to edit
          another Page One story about the anthrax investigation or the NSA. You
          were my model journalist, from your rigorous reporting to pushing
          deadline to get the whole story. I’m honored to have worked with you!
        </p>
        &mdash; Tim Wheeler (@TBWheeler){" "}
        <a href="https://twitter.com/TBWheeler/status/1207086563462713344?ref_src=twsrc%5Etfw">
          December 17, 2019
        </a>
      </blockquote>

      <blockquote
        className="twitter-tweet"
        data-conversation="none"
        data-lang="en"
      >
        <p lang="en" dir="ltr">
          The best. Pretty damn good journalist too. Congrats, Pal.
        </p>
        &mdash; Michael Ollove (@Michael_Ollove){" "}
        <a href="https://twitter.com/Michael_Ollove/status/1207011309994295298?ref_src=twsrc%5Etfw">
          December 17, 2019
        </a>
      </blockquote>

      <blockquote
        className="twitter-tweet"
        data-conversation="none"
        data-lang="en"
      >
        <p lang="en" dir="ltr">
          We’ll miss you in the bureau! You could write books and publish them
          in installments in{" "}
          <a href="https://twitter.com/nytimes?ref_src=twsrc%5Etfw">@nytimes</a>
          . Like Dickens or Dostoevsky.
        </p>
        &mdash; Edward Wong (@ewong){" "}
        <a href="https://twitter.com/ewong/status/1206767049923543040?ref_src=twsrc%5Etfw">
          December 17, 2019
        </a>
      </blockquote>

      <blockquote
        className="twitter-tweet"
        data-conversation="none"
        data-lang="en"
      >
        <p lang="en" dir="ltr">
          Last thing I&#39;ll say about they guy from Baltimore: He&#39;s truly
          in the Pantheon of remarkable journalists. He could do everything
          while doing everything. He made it all look easy too. I never heard
          him complain once. He&#39;s a badass. And I&#39;ll miss working with
          him.
        </p>
        &mdash; Adam Goldman (@adamgoldmanNYT){" "}
        <a href="https://twitter.com/adamgoldmanNYT/status/1206770245702213633?ref_src=twsrc%5Etfw">
          December 17, 2019
        </a>
      </blockquote>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>

      <hr></hr>

      <div>
        <p>
          Sent by email to the NYTimes Washington Bureau on December 16, 2019:
        </p>
        <h2>
          A Note from Rebecca Corbett and Elisabeth Bumiller: Scott Shane, Who
          Broke News Old and New, is Retiring
        </h2>
        <div className="rebecca-elisabeth-tribute">
          {rebeccaElisabethTribute
            .split("\n")
            .filter(paragraph => paragraph.trim() !== "")
            .map((paragraph, paragraphIndex) => (
              <p className="paragraph" key={paragraphIndex}>
                {paragraph}
              </p>
            ))}
        </div>
      </div>
      <hr></hr>
      <img
        alt="Letter from New York Times publisher A. G. Sulzberger"
        className="letter"
        src="/static/images/letter-from-the-publisher.jpg"
      />
      <style jsx>{`
        .twitter-tweet {
          margin: 0;
          margin-bottom: 15px;
          padding: 0;
        }
        .twitter-tweet + .twitter-tweet {
          padding-left: 30px;
          border-left: 5px solid #9e9e9e;
        }
        hr {
          margin: 30px 45px;
        }
        .paragraph {
          margin-bottom: 15px;
        }
      `}</style>
    </Layout>
  );
};
