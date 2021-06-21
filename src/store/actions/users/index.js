import api from "./../../../services/api";
import { groupPostByUsers } from "./../../../utils/helpers";
import { setArticleList } from "./../articles";

export const USERS_GET_ARTICLES_ERROR = "USERS_GET_ARTICLES_ERROR";
export const USERS_GET_ARTICLES_REQUEST = "USERS_GET_ARTICLES_REQUEST";
export const USERS_GET_ARTICLES_SUCCESS = "USERS_GET_ARTICLES_SUCCESS";

export function getArticles() {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: USERS_GET_ARTICLES_REQUEST,
      });

      const { app: { sl_token } } = getState();

      const response = await api.get(`/posts?sl_token=${sl_token}`);

      if (response.status === 200) {
        const data = groupPostByUsers(response.data.data.posts);
        console.log(data);

        setArticleList(data[0].posts);
  
        dispatch({
          type: USERS_GET_ARTICLES_SUCCESS,
          payload: data,
        });
      }

    } catch (error) {
      dispatch({
        type: USERS_GET_ARTICLES_ERROR,
        payload: error,
      });
    }
  }
}