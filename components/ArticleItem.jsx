import styles from "@/styles/ArticleItem.module.css";

import ArticleFullView from "./ArticleFullView";
import ArticlePreview from "./ArticlePreview";

import {useState} from "react";

export default function ArticleItem({article}) {
  const [fullViewMode, setFullViewMode] = useState(false);
  let classNames = styles.articleItemContainer;

  if(fullViewMode) {
    classNames += ` ${styles.fullViewMode}`;
  } else {
    classNames += ` ${styles.previewMode}`;
  }

  return (    
    <li className={classNames}>
      {fullViewMode &&  <button className={styles.toggleViewButton} onClick={() => setFullViewMode(!fullViewMode)}>X</button>}
      {fullViewMode ? <ArticleFullView article={article} /> : <ArticlePreview article={article}/>}    
      {!fullViewMode &&  <button className={styles.toggleViewButton} onClick={() => setFullViewMode(!fullViewMode)} >Read More</button>}
    </li>
  )
}