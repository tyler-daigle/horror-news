import ArticleItem from "./ArticleItem";
import styles from "@/styles/ArticleList.module.css";
import { Stack } from "@mantine/core";

export default function ArticleList({ articles }) {
  return (
    <Stack>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </Stack>
  );
}
