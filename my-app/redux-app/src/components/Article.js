import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const ArticleContainer = styled.div`
  background-color: #fff;
  box-shadow: 0px 3px 5px 0px #b3b3b3;
  margin: 10px;
  padding: 4% 4%;
  max-width: 300px;
  height: 400px;
  overflow: scroll;
`;

const Img = styled.img`
  width: 90%;
  padding: 10px 0px;
`;

const Link = styled.a`
  text-decoration: none;
  background-color: #c5d5c5;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  margin-bottom: 10px;

  &:hover {
    background-color: #fff;
    border: 2px solid #c5d5c5;
    color: #c5d5c5;
    font-weight: bold;
  }
`;

export function Article(props) {
  console.log(props);
  return (
    <ArticleContainer>
      <div>
        <h3>{props.curr.title}</h3>
        <p>{props.curr.author}</p>
        <span>{props.curr.source.name}</span>
        <p>{props.curr.description}</p>
      </div>
      <Img src={props.curr.urlToImage} alt={props.curr.title} />
      <Link href={props.curr.url}>Learn More</Link>
    </ArticleContainer>
  );
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

export default connect(mapStateToProps)(Article);
