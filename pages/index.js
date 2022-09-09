import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import MainContainer from "../components/MainContainer";
import ArticleList from "../components/ArticleList";
import Head from "next/head";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>SITE1031 - HORROR - MOVIES - MUSIC</title>
      </Head>
      
      <h1>SITE1031</h1>
      <main>
        <MainContainer>
          <ArticleList articles={articles} />          
        </MainContainer>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const client = new ApolloClient({
    uri: "https://api-us-east-1.hygraph.com/v2/cl7st3lhy03by01uu0yy3b3xw/master",
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query GetArticles {
        articles {
          title
          date
          articleContent {
            html
          }
        }
      }
    `,
  });

  return {
    props: {
      articles: data.articles,
    },
  };
}
