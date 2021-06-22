import React from "react";
import configureStore from "redux-mock-store";
import { render, fireEvent } from "@testing-library/react";
import * as redux from "react-redux";
import { articles } from "./../../utils/mocks/articles";
import Articles from "./";

const mockStore = configureStore([]);

describe("Components", () => {
  describe("Articles", () => {
    let wrapper;
    let store;
    const dispatch = jest.fn();
  
    beforeEach(() => {
      store = mockStore({
        articles: {
          articles
        }
      });

      jest.spyOn(redux, "useDispatch").mockImplementation(() => dispatch);

      wrapper = render(
        <redux.Provider store={store}>
          <Articles />
        </redux.Provider>
      );
    });
    it("renders correctly", () => {
      const { container } = wrapper;
      expect(container.firstChild).toMatchSnapshot();
    });

    it("should click button order-asc button", () => {
      const { getByTestId } = wrapper;
      fireEvent.click(getByTestId("order-asc"));

      expect(redux.useDispatch).toHaveBeenCalled();
      expect(redux.useDispatch).toHaveBeenCalledTimes(1);
    });

    it("should click button order-desc button", () => {
      const { getByTestId } = wrapper;
      fireEvent.click(getByTestId("order-desc"));

      expect(redux.useDispatch).toHaveBeenCalled();
      expect(redux.useDispatch).toHaveBeenCalledTimes(1);
    });
  });
});
