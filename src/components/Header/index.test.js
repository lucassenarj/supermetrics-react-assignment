import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Header from "./";

describe("Components", () => {
  describe("Header", () => {
    it("renders correctly", () => {
      const { container } = render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
