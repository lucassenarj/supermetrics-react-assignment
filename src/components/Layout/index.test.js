import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Layout from "./";

describe("Components", () => {
  describe("Layout", () => {
    it("renders correctly", () => {
      const { container } = render(
        <MemoryRouter>
          <Layout>
            <h1>Test component</h1>
          </Layout>
        </MemoryRouter>
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
