import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import {
  USERS_GET_ARTICLES_ERROR,
  USERS_GET_ARTICLES_REQUEST,
  USERS_GET_ARTICLES_SUCCESS,
  ARTICLES_SET_LIST,
  getArticles,
} from "./../";
import { posts } from "./../../../utils/mocks/posts.js";
import api from "./../../../services/api";

const mockStore = configureStore([thunk]);
const store = mockStore({});
const mock = new MockAdapter(api);

describe("Actions", () => {
  describe("users", () => {
    beforeEach(() => {
      mock.reset();
      store.clearActions();
    });
    it("should dispatch USERS_GET_ARTICLES_REQUEST and USERS_GET_ARTICLES_SUCCESS action", () => {
      mock.onGet("/posts?sl_token=token").reply(200, posts);
      
      const expectedActions = [
        USERS_GET_ARTICLES_REQUEST,
        ARTICLES_SET_LIST,
        USERS_GET_ARTICLES_SUCCESS,
      ];

      return store.dispatch(getArticles("token"))
        .then(() => {
          const actualActions = store.getActions().map(action => action.type)
          expect(actualActions).toEqual(expectedActions)
        });
    });
  
    it("should dispatch USERS_GET_ARTICLES_REQUEST and USERS_GET_ARTICLES_ERROR action", () => {
      mock.onGet("/posts?sl_token=token").reply(500);
      
      const expectedActions = [
        USERS_GET_ARTICLES_REQUEST,
        USERS_GET_ARTICLES_ERROR
      ];

      return store.dispatch(getArticles("token"))
        .then(() => {
          const actualActions = store.getActions().map(action => action.type)
          expect(actualActions).toEqual(expectedActions)
        });
    });
  });
})