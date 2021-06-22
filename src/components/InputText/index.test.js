import { render } from "@testing-library/react";
import { FaEnvelope } from "react-icons/fa";
import InputText from "./";

const values = {
  type: "email",
  placeholder: "Email",
  icon: <FaEnvelope />,
  label: "Email",
  value: "user@test.com",
  onChange: jest.fn(),
  name: "email",
};

describe("Components", () => {
  describe("InputText", () => {
    it("should render correctly", () => {
      const { container } = render(<InputText
        type={values.type}
        placeholder={values.placeholder}
        icon={values.icon}
        label={values.label}
        value={values.value}
        onChange={values.onChange}
        name={values.name}
      />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
