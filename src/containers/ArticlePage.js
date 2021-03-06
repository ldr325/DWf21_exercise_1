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

  const newDate = new Date(article.publishedDate); // tye Date
  const dateString = newDate.toDateString();


  return(
    <main>
      <section
        className="ArticleHeader"
        style={{
          backgroundImage: `url('${article.image && article.image.url}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="ArticleHeaderText">
          <h1 className="HeaderOneStyle">{article.title}</h1>
          <p className="ArticleCardDate">{dateString}</p>
          <p className="ArticleHeaderBlurb"> {article.blurb}</p>
        </div>
      </section>
      <section className="ArticleText">
        {article.articleText &&
          article.articleText.map((text, i) => {
            const type = text.type;
            switch(type) {
              case 'p':
                return <p key={i}>{text.data}</p>;
              case 'h2':
                return <h2 key={i}>{text.data}</h2>
              case 'h3':
                return <h3 key={i}>{text.data}</h3>
              default:
                return <p key={i}>{text.data}</p>;
            }
          })}

      </section>

    </main>
    /*<div>
      <h1>{articleTitle}</h1>
    </div>*/
  );
}

export default Article;
