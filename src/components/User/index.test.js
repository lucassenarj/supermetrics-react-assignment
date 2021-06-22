import React from "react";
import { render } from "@testing-library/react";
import User from "./";

const values = {
  name: "User test",
  onClick: jest.fn(),
  posts: 3,
}

describe("Components", () => {
  describe("User", () => {
    it("renders correctly", () => {
      const { container } = render(<User
        name={values.name}
        onClick={values.onClick}
        posts={values.posts}
      />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
