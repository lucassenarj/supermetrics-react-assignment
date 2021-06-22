import reducer from "./index";
import { ARTICLES_SET_LIST } from "./../../actions";
import { articles } from "./../../../utils/mocks/articles";

describe("Reducers", () => {
  describe("articles", () => {
    it("should return a default state", () => {
      const state = reducer(undefined, {});
      expect(state).not.toBeUndefined();
      expect(state.articles).toHaveLength(0);
    });
  
    describe("ARTICLES_SET_LIST", () => {
      it("should save data on state", () => {
        const state = reducer(undefined, {
          type: ARTICLES_SET_LIST,
          payload: articles,
        });
  
        expect(state).not.toBeUndefined();
        expect(state.articles).toHaveLength(3);
      });
    });
  });
});