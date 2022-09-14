import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import MainContainer from "../components/MainContainer";
import Head from "next/head";
import Layout from "@/components/base/Layout";
import Tweets from "@/components/Tweets";
import Blogs from "@/components/Blogs";
import YouTubeLinks from "@/components/YouTubeLinks";
import NewsItems from "@/components/NewsItems";
import { Title, Stack, Group, Container } from "@mantine/core";
import FancyTitle from "@/components/base/FancyTitle";
import Image from "next/image";
import calendarSVG from "../public/images/calendar.svg";

export default function Home({ newsEntries, siteName, siteHeadline }) {
  return (
    <Layout
      pageTitle={`${siteName} - ${siteHeadline}`}
      siteName={siteName}
      siteHeadline={siteHeadline}
    >
      {newsEntries.map((entry) => (
        <Container width="100%" my="lg">
          <Group>
            <Image
              className="calendar-svg"
              src={calendarSVG}
              alt="Calendar Icon"
            />
            <FancyTitle order={2} color="red.6" size="h1">
              {entry.date}
            </FancyTitle>
          </Group>
          {entry.blogs && <Blogs blogs={entry.blogs} />}
          {entry.newsItemLinks.length > 0 && (
            <NewsItems newsItems={entry.newsItemLinks} />
          )}
          {entry.tweets && <Tweets tweets={entry.tweets} />}
          {entry.youTubeLinks && (
            <YouTubeLinks youTubeLinks={entry.youTubeLinks} />
          )}
        </Container>
      ))}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const client = new ApolloClient({
    uri: "https://api-us-east-1.hygraph.com/v2/cl7st3lhy03by01uu0yy3b3xw/master",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetNewsEntries {
        newsEntries(orderBy: date_DESC) {
          id
          date
          tweets {
            tweetEmbedCode
            id
          }
          youTubeLinks {
            id
            videoId
          }
          blogs {
            id
            headerImageAltText
            blogHeaderImage {
              url
            }
            title
            blogSummary
            blogContent {
              html
            }
          }
          newsItemLinks {
            newsItemSummary
            newsItemUrl
            title
            id
            setObjectFitContain
            newsItemImage {
              url
            }
          }
        }
        siteInfos {
          siteHeadline
          siteName
        }
      }
    `,
  });
  return {
    props: {
      newsEntries: data.newsEntries,
      siteName: data.siteInfos[0].siteName,
      siteHeadline: data.siteInfos[0].siteHeadline,
    },
  };
}
