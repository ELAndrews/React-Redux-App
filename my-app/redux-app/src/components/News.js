import React, { useEffect } from "react";
import { connect } from "react-redux";
import Article from "./Article";
import { setArticles } from "../state/actionCreators";

export function News({ articles, setArticles }) {
  useEffect(() => {
    setArticles();
  }, []);
  return (
    <div>
      {articles.map((curr, index) => {
        return (
          <div key={index}>
            <Article curr={curr} index={index} />
          </div>
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
    articles: state.articles
  };
}

export default connect(mapStateToProps, { setArticles })(News);
