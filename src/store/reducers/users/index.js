import {
  USERS_GET_ARTICLES_ERROR,
  USERS_GET_ARTICLES_REQUEST,
  USERS_GET_ARTICLES_SUCCESS
} from "./../../actions";

const initialState = {
  users: [],
  loading: true,
  error: false,
};

const users = (state = initialState, action) => {
  switch(action.type) {
    case USERS_GET_ARTICLES_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }
    case USERS_GET_ARTICLES_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }
    case USERS_GET_ARTICLES_SUCCESS: {
      const users = action.payload;
      return {
        ...state,
        loading: false,
        error: false,
        users,
      }
    }
    default: 
      return state;
  }
}

export default users;
