import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import api from "./../../../services/api";
import {
  APP_SIGN_IN_ERROR,
  APP_SIGN_IN_REQUEST,
  APP_SIGN_IN_SUCCESS,
  signIn,
} from "./../";
import { loginResponse } from "./../../../utils/mocks/login";

const mockStore = configureStore([thunk]);
const store = mockStore({});
const mock = new MockAdapter(api);

describe("Actions", () => {
  describe("app", () => {
    beforeEach(() => {
      mock.reset();
      store.clearActions();
    });
    it("should dispatch APP_SIGN_IN_REQUEST and APP_SIGN_IN_SUCCESS action", () => {
      const { name, email } = loginResponse;

      const expectedActions = [
        APP_SIGN_IN_REQUEST,
        APP_SIGN_IN_SUCCESS,
      ];

      mock.onPost("/register").reply(200, loginResponse);

      return store.dispatch(signIn(name, email))
        .then(() => {
          const actualActions = store.getActions().map(action => action.type)
          expect(actualActions).toEqual(expectedActions)
        });
    });

    it("should dispatch APP_SIGN_IN_REQUEST and APP_SIGN_IN_ERROR action", () => {
      const store = mockStore({});

      const expectedActions = [
        APP_SIGN_IN_REQUEST,
        APP_SIGN_IN_ERROR,
      ];

      mock.onPost("/register").reply(404, loginResponse);

      return store.dispatch(signIn())
        .then(() => {
          const actualActions = store.getActions().map(action => action.type)
          expect(actualActions).toEqual(expectedActions)
        });
    });
  });
})