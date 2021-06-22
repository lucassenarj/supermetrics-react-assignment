import reducer from "./index";
import {
  APP_SIGN_IN_ERROR,
  APP_SIGN_IN_REQUEST,
  APP_SIGN_IN_SUCCESS,
} from "./../../actions";
import { loginResponse } from "./../../../utils/mocks/login";

describe("Reducers", () => {
  describe("app", () => {
    it("should return a default state", () => {
      const state = reducer(undefined, {});
      expect(state).not.toBeUndefined();
      expect(state.loading).not.toBeUndefined();
      expect(state.error).not.toBeUndefined();
      expect(state.expiration).not.toBeUndefined();
      expect(state.sl_token).not.toBeUndefined();
      expect(state.email).not.toBeUndefined();
      expect(state.name).not.toBeUndefined();
    });
  
    describe("APP_SIGN_IN_SUCCESS", () => {
      it("should save data on state", () => {
        const {
          expiration,
          email,
          sl_token,
          name,
        } = loginResponse;
  
        const state = reducer(undefined, {
          type: APP_SIGN_IN_SUCCESS,
          payload: loginResponse,
        });
  
        expect(state).not.toBeUndefined();
        expect(state.loading).toEqual(false);
        expect(state.error).toEqual(false);
        expect(state.expiration).toEqual(expiration);
        expect(state.email).toEqual(email);
        expect(state.sl_token).toEqual(sl_token);
        expect(state.name).toEqual(name);
      });
    });
  
    describe("APP_SIGN_IN_REQUEST", () => {
      it("should save loading true on state", () => {
        const state = reducer(undefined, {
          type: APP_SIGN_IN_REQUEST
        });
  
        expect(state).not.toBeUndefined();
        expect(state.loading).toEqual(true);
        expect(state.error).toEqual(false);
      });
    });
  
    describe("APP_SIGN_IN_ERROR", () => {
      it("should save error true on state", () => {
        const state = reducer(undefined, {
          type: APP_SIGN_IN_ERROR
        });
  
        expect(state).not.toBeUndefined();
        expect(state.error).toEqual(true);
        expect(state.loading).toEqual(false);
      });
    });
  });
});