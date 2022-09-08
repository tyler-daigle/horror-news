import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function Post({title, content}) {
  console.log(content);
  return (
    <article>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{__html: content.html}}></div>
    </article>
  )
}

export async function getStaticPaths() {
  
  const client = new ApolloClient({
    uri: "https://api-us-east-1.hygraph.com/v2/cl7st3lhy03by01uu0yy3b3xw/master",
    cache: new InMemoryCache()
  });

  const {data} = await client.query({
    query: gql`
      query GetSlug {
        articles {              
          articleSlug          
        }
      }
    `
  });
  
  const paths = data.articles.map(article => ({params: { slug: article.articleSlug}}));
  
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  console.log("Here");
  const client = new ApolloClient({
    uri: "https://api-us-east-1.hygraph.com/v2/cl7st3lhy03by01uu0yy3b3xw/master",
    cache: new InMemoryCache()
  });

  const {slug} = params;

  const {data} = await client.query({
    query: gql`
      query GetArticle {
        articles(where: {articleSlug: "${slug}"}) {     
          title
          articleContent {
            html
          }    
        }
      }
    `
  });

  console.log(data);
  const article = data.articles[0];

  return {
    props: {
      title: article.title,
      content: article.articleContent
    }
  }
}