import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Data from '../components/data.json';

function Article() {
  const [article, setArticle] = useState({});

  let {id} = useParams();

  useEffect(() => {
    const dataToSet = Data.find((item) => item.id === id);
    setArticle(dataToSet)
  }, [id]);



  return(
    <main>
      <section className="ArticleHeader">
        <h1 className="HeaderOneStyle">{article.title}</h1>
        <p className="ArticleCardDate">{article.publishedDate}</p>
        <p className="ArticleHeaderBlurb"> {article.blurb}</p>
      </section>
      <section className="ArticleText">
        {article.articleText &&
          article.articleText.map((text, i) => {
            return <p key={i}>{text.data}</p>;
          })};

      </section>

    </main>
    /*<div>
      <h1>{articleTitle}</h1>
    </div>*/
  );
}

export default Article;
