import { FETCH_ARTICLES, TOGGLE_FAVORITES } from "../../constants/constants";

export const fetchArticles = () => {
  return async (dispatch) => {
    // logic to fetch Data
    const result = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2023-04-25&sortBy=publishedAt&apiKey=61c44ecf345d45a8bf3fcc6e9d440cb9"
    );

    const resultData = await result.json();
    console.log(resultData);

    dispatch({
      type: FETCH_ARTICLES,
      payload: resultData,
    });
  };
};

export const toggleFavorites = (url) => {
  return {
    type: TOGGLE_FAVORITES,
    payload: url,
  };
};
