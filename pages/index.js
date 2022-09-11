import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import MainContainer from "../components/MainContainer";
import Head from "next/head";
import Layout from "@/components/base/Layout";
import Tweets from "@/components/Tweets";
import Blogs from "@/components/Blogs";
import YouTubeLinks from "@/components/YouTubeLinks";
import NewsItems from "@/components/NewsItems";
import { Title, Stack, Container } from "@mantine/core";

export default function Home({ newsEntries }) {
  return (
    <Layout pageTitle={"SITE1031 - HORROR - MOVIES - MUSIC"}>
      {newsEntries.map((entry) => (
        <Container width="100%">
          <Title order={2} color="red">
            📅 {entry.date}
          </Title>
          {entry.blogs && <Blogs blogs={entry.blogs} />}
          {entry.tweets && <Tweets tweets={entry.tweets} />}
          {entry.youTubeLinks && (
            <YouTubeLinks youTubeLinks={entry.youTubeLinks} />
          )}
          {entry.newsItemLinks && <NewsItems newsItems={entry.newsItemLinks} />}
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

  // const { data } = await client.query({
  //   query: gql`
  //     query GetArticles {
  //       articles {
  //         id
  //         title
  //         date
  //         articleContent {
  //           html
  //         }
  //       }
  //     }
  //   `,
  // });

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
          }
        }
      }
    `,
  });
  return {
    props: {
      newsEntries: data.newsEntries,
    },
  };
}
