import reducer from "./index";
import {
  USERS_GET_ARTICLES_ERROR,
  USERS_GET_ARTICLES_REQUEST,
  USERS_GET_ARTICLES_SUCCESS,
} from "./../../actions";
import { users } from "./../../../utils/mocks/users";

describe("Reducers", () => {
  describe("users", () => {
    it("should return a default state", () => {
      const state = reducer(undefined, {});
      expect(state).not.toBeUndefined();
      expect(state.loading).toEqual(true);
      expect(state.error).toEqual(false);
      expect(state.users).toHaveLength(0);
    });
  
    describe("USERS_GET_ARTICLES_SUCCESS", () => {
      it("should save data on state", () => {
        
        const state = reducer(undefined, {
          type: USERS_GET_ARTICLES_SUCCESS,
          payload: users,
        });
  
        expect(state).not.toBeUndefined();
        expect(state.loading).toEqual(false);
        expect(state.error).toEqual(false);
        expect(state.users).toHaveLength(2);
      });
    });
  
    describe("USERS_GET_ARTICLES_REQUEST", () => {
      it("should save loading true on state", () => {
        const state = reducer(undefined, {
          type: USERS_GET_ARTICLES_REQUEST
        });
  
        expect(state).not.toBeUndefined();
        expect(state.loading).toEqual(true);
        expect(state.error).toEqual(false);
      });
    });
  
    describe("USERS_GET_ARTICLES_ERROR", () => {
      it("should save error true on state", () => {
        const state = reducer(undefined, {
          type: USERS_GET_ARTICLES_ERROR
        });
  
        expect(state).not.toBeUndefined();
        expect(state.error).toEqual(true);
        expect(state.loading).toEqual(false);
      });
    });
  });
});