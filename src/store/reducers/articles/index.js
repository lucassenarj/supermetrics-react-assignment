import { ARTICLES_SET_LIST } from "./../../actions";

const initialState = {
  articles: [],
};

const articles = (state = initialState, action) => {
  switch(action.type) {
    case ARTICLES_SET_LIST: {
      const articles = action.payload;
      return {
        ...state,
        articles,
      }
    }
    default: 
      return state;
  }
}

export default articles;
