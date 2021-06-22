import api from "./../../../services/api";

export const APP_SIGN_IN_ERROR = "APP_SIGN_IN_ERROR";
export const APP_SIGN_IN_REQUEST = "APP_SIGN_IN_REQUEST";
export const APP_SIGN_IN_SUCCESS = "APP_SIGN_IN_SUCCESS";

export function signIn(name, email) {
  return async (dispatch) => {
    try {
      dispatch({
        type: APP_SIGN_IN_REQUEST,
      });

      const body = {
        client_id: process.env.REACT_APP_SUPERMETRICS_CLIENT_ID,
        name,
        email,
      };

      const response = await api.post("/register", body);
      if (response.status === 200) {
        const currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + 1);
  
        dispatch({
          type: APP_SIGN_IN_SUCCESS,
          payload: {
            ...response.data.data,
            expiration: currentDate.getTime(),
            name,
            email,
          },
        });
      }

    } catch (error) {
      dispatch({
        type: APP_SIGN_IN_ERROR,
        payload: error,
      });
    }
  }
}