import * as React from "react";
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
    const handleSort = jest.fn();
  
    beforeEach(() => {
      store = mockStore({
        articles: {
          articles
        }
      });

      jest.spyOn(redux, "useDispatch").mockImplementation(() => dispatch);

      wrapper = render(
        <redux.Provider store={store}>
          <Articles onClick={handleSort} />
        </redux.Provider>
      );
    });
    it("renders correctly", () => {
      const { container } = wrapper;
      expect(container.firstChild).toMatchSnapshot();
    });

    it("should click button order-asc button", async () => {
      const { getByTestId } = wrapper;
      const button = getByTestId("order-asc");
      fireEvent.click(button);

      expect(button).toHaveClass("articles__buttons__btn--active");
    });

    it("should click button order-desc button", () => {
      const { getByTestId } = wrapper;
      const button = getByTestId("order-desc");
      fireEvent.click(button);

      expect(button).toHaveClass("articles__buttons__btn--active");
    });
  });
});
