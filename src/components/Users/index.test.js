import React from "react";
import configureStore from "redux-mock-store";
import { render, fireEvent } from "@testing-library/react";
import * as redux from "react-redux";
import { users } from "./../../utils/mocks/users";
import { MemoryRouter } from "react-router";
import Users from "./";

const mockStore = configureStore([]);

describe("Components", () => {
  describe("Users", () => {
    let wrapper;
    let store;
    const dispatch = jest.fn();
  
    beforeEach(() => {
      store = mockStore({
        users: {
          users
        }
      });

      jest.spyOn(redux, "useDispatch").mockImplementation(() => dispatch);

      wrapper = render(
        <redux.Provider store={store}>
          <MemoryRouter>
            <Users users={users} />
          </MemoryRouter>
        </redux.Provider>
      );
    });
    it("renders correctly", () => {
      const { container } = wrapper;
      expect(container.firstChild).toMatchSnapshot();
    });

    it("should click button User button", () => {
      const { user_id } = users[0];
      const { getByTestId } = wrapper;
      fireEvent.click(getByTestId(user_id));

      expect(redux.useDispatch).toHaveBeenCalled();
      expect(redux.useDispatch).toHaveBeenCalledTimes(1);
    });
  });
});
