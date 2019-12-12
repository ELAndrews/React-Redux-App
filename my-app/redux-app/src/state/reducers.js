import * as types from "./actionTypes";
import useLocalStorage from "../hook/useLocalStorage";

const initialState = {
  count: 0,
  articles: [],
  color: "default"
};

export function countReducer(count = initialState.count, action) {
  switch (action.type) {
    case types.INCREMENT:
      return count + 1;
    default:
      return count;
  }
}

export function articlesReducer(articles = initialState.articles, action) {
  switch (action.type) {
    case types.SET_ARTICLES:
      return action.payload;
    default:
      return articles;
  }
}

export function colorPicker(color = initialState.color, action) {
  switch (action.type) {
    case types.SET_COLOR:
      return action.payload;
    default:
      return color;
  }
}
