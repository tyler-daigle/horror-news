import ArticleItem from "./ArticleItem";
import styles from "@/styles/ArticleList.module.css";

export default function ArticleList({articles}) {
  return (
    <ul className={styles.articleList}>
      {articles.map(article => <ArticleItem article={article} />)}
    </ul>
  )
}