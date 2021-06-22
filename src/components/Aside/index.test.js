import React from "react";
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { users } from "./../../utils/mocks/users";
import Aside from "./";

const mockStore = configureStore([]);
const store = mockStore({
  users: {
    users,
  },
});

describe("Components", () => {
  describe("Aside", () => {
    it("renders correctly", () => {
      const { container } = render(
        <Provider store={store}>
          <Aside />
        </Provider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
