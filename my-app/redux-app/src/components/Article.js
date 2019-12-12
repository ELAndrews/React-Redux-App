import React from "React";
import { connect } from "react-redux";

export function Article({ article }) {
  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.author}</p>
      <span>{article.source.name}</span>
      <p>{article.publishedAt}</p>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.decription}</p>
      <a href={article.url}>Learn More</a>
    </div>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Article);
