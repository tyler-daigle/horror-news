import styles from "@/styles/ArticlePreview.module.css";
import Container from "@/components/base/Container";

export default function ArticlePreview({ article }) {
  return (
    <Container>
      <article>
        <div className={styles.previewContainer}>
          <img
            className={styles.previewImage}
            src="https://via.placeholder.com/500"
            alt="placeholder"
            height="100"
            width="300"
          />
          <div className={styles.previewContent}>
            <h2 className={styles.articleTitle}>{article.title}</h2>
            <p className={styles.articleSummary}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              iusto, ea cum deserunt, dicta neque autem, rem optio
              necessitatibus suscipit asperiores enim tempore perferendis culpa!
            </p>
          </div>
        </div>
      </article>
    </Container>
  );
}
