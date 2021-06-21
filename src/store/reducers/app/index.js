import {
  APP_SIGN_IN_ERROR,
  APP_SIGN_IN_REQUEST,
  APP_SIGN_IN_SUCCESS
} from "./../../actions";

const initialState = {
  loading: false,
  error: false,
  expiration: 0,
  sl_token: "",
  email: "",
  name: "",
};

const users = (state = initialState, action) => {
  switch(action.type) {
    case APP_SIGN_IN_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }
    case APP_SIGN_IN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }
    case APP_SIGN_IN_SUCCESS: {
      const data = action.payload;
      console.log(data);
      return {
        ...state,
        loading: false,
        error: false,
        expiration: data.expiration,
        sl_token: data.sl_token,
        email: data.email,
        name: data.name,
      }
    }
    default: 
      return state;
  }
}

export default users;
