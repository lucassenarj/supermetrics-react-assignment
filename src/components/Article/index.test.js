import React from "react";
import { render } from "@testing-library/react";
import Article from "./";

const values = {
  date: "2021-06-08T16:27:02+00:00",
  message: "Some cool messages",
}

describe("Components", () => {
  describe("Article", () => {
    it("renders correctly", () => {
      const { container } = render(<Article date={values.date} message={values.message} />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});