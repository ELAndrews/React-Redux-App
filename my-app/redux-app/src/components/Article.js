import React from "react";
import { connect } from "react-redux";

export function Article(props) {
  console.log(props);
  return (
    <div>
      <h3>{props.curr.title}</h3>
      <p>{props.curr.author}</p>
      <span>{props.curr.source.name}</span>
      <p>{props.curr.publishedAt}</p>
      <img src={props.curr.urlToImage} alt={props.curr.title} />
      <p>{props.curr.decription}</p>
      <a href={props.curr.url}>Learn More</a>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

export default connect(mapStateToProps)(Article);
