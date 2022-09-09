import Container from "@/components/base/Container";
import styles from "@/styles/ArticleFullView.module.css";

export default function ArticleFullView({article}) {
  return (
    <Container>
      <div className={styles.articleFullViewContainer}>
        <h2>{article.title}</h2>
        <div className="cmsHTMLContentContainer" dangerouslySetInnerHTML={{__html: article.articleContent.html}}></div>
      </div>

    </Container>
  )
}