export const ARTICLES_SET_LIST = "ARTICLES_SET_LIST";

export function setArticleList(posts) {
  return (dispatch) => {
    dispatch({
      type: ARTICLES_SET_LIST,
      payload: posts,
    });
  };
};
