import React, { useEffect } from "react";
import { connect } from "react-redux";
import Article from "./Article";
import { setArticles } from "../state/actionCreators";
import styled from "styled-components";

const NewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0px auto;
`;

export function News({ articles, setArticles }) {
  useEffect(() => {
    setArticles();
  }, []);
  return (
    <NewContainer>
      {articles.map((curr, index) => {
        return (
          <div key={index}>
            <Article curr={curr} index={index} />
          </div>
        );
      })}
    </NewContainer>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
    articles: state.articles
  };
}

export default connect(mapStateToProps, { setArticles })(News);
