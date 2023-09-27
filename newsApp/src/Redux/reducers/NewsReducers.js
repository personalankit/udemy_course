import { FETCH_ARTICLES, TOGGLE_FAVORITES } from "../../constants/constants";

const initialState = {
  articles: [],
  favorites: [],
};

export default NewsReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case TOGGLE_FAVORITES:
      // LOGIC FOR ADDING OR REMOVING ITEM FROM FAVORITES
      const index = state.favorites.findIndex(
        (article) => article.url === action.payload
      );

      if (index >= 0) {
        // item exist
        const favorites = [...state.favorites];
        favorites.splice(index, 1);
        return {
          ...state,
          favorites: favorites,
        };
      } else {
        // item does not exist
        const article = state.articles.articles.find(article => article.url === action.payload)

        return {
          ...state, 
          favorites: state.favorites.concat(article)
        }
      }

    default:
      return state;
  }
};
