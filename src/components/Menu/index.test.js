import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Menu from "./";

describe("Components", () => {
  describe("Menu", () => {
    it("renders correctly", () => {
      const { container } = render(
        <MemoryRouter>
          <Menu />
        </MemoryRouter>
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
