import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import MenuItem from "./";

const values = {
  path: "/dashboard",
  text: "Dashboard"
}

describe("Components", () => {
  describe("MenuItem", () => {
    it("renders correctly", () => {
      const { container } = render(
        <MemoryRouter>
          <MenuItem path={values.path} text={values.text} />
        </MemoryRouter>
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
