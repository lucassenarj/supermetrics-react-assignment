import configureStore from "redux-mock-store";

import {
  ARTICLES_SET_LIST,
  setArticleList,
} from "./../";
import { articles } from "./../../../utils/mocks/articles";

const mockStore = configureStore([]);

describe("Actions", () => {
  describe("articles", () => {
    it("should create ARTICLES_SET_LIST action", () => {
      const expectAction = {
        type: ARTICLES_SET_LIST,
        payload: articles,
      };

      const store = mockStore({});

      store.dispatch(setArticleList(articles));
      const actions = store.getActions();

      expect(actions).not.toBe(null);
      expect(actions).toEqual([expectAction]);
    });
  });
})