import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function Home({ articles }) {
  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li>
            <Link href={`/posts/${article.articleSlug}`}>
              <a>{article.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </div>
  );
}

export async function getStaticProps(context) {
  const client = new ApolloClient({
    uri: "https://api-us-east-1.hygraph.com/v2/cl7st3lhy03by01uu0yy3b3xw/master",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetSlug {
        articles {
          title
          articleSlug
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
