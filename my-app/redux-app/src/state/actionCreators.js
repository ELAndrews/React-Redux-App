import * as types from "./actionTypes";
import axios from "axios";

export const increment = () => {
  return { type: types.INCREMENT };
};

export const setArticles = () => dispatch => {
  axios
    .get(
      "https://newsapi.org/v2/everything?q=Apple&from=2019-12-12&sortBy=popularity&apiKey=aaebd73f9abb40069833b854172bf50b"
    )
    .then(responce => {
      const articles = responce.data.articles;
      console.log(articles);
      dispatch({ type: types.SET_ARTICLES, payload: articles });
    })
    .catch(error => {
      console.log(error);
    });
};
