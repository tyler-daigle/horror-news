import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import MainContainer from "../components/MainContainer";
import Head from "next/head";
import Layout from "@/components/base/Layout";
import Tweets from "@/components/Tweets";
import Blogs from "@/components/Blogs";
import YouTubeLinks from "@/components/YouTubeLinks";

export default function Home({ newsEntries }) {
  return (
    <Layout pageTitle={"SITE1031 - HORROR - MOVIES - MUSIC"}>
      {/* <ArticleList articles={articles} /> */}
      <h2>Working on it...</h2>
      <p>{newsEntries.length}</p>
      {newsEntries.map((entry) => (
        <>
          {entry.blogs && <Blogs blogs={entry.blogs} />}
          {entry.tweets && <Tweets tweets={entry.tweets} />}
          {entry.youTubeLinks && (
            <YouTubeLinks youTubeLinks={entry.youTubeLinks} />
          )}
        </>
      ))}
    </Layout>
    // <div>
    //   <Head>
    //     <title>SITE1031 - HORROR - MOVIES - MUSIC</title>
    //   </Head>

    //   <h1>SITE1031</h1>
    //   <main>
    //     <MainContainer>
    //       <ArticleList articles={articles} />
    //     </MainContainer>
    //   </main>
    // </div>
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
          }
          youTubeLinks {
            videoId
          }
          blogs {
            title
            blogSummary
            blogContent {
              html
            }
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
