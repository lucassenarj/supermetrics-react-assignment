import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("App should render correctly", () => {
    const { container } = render(<App />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <section
        class="login"
      >
        <form>
          <div
            class="login__form"
          >
            <div
              class="login__form__heading"
            >
              <h2>
                Login
              </h2>
            </div>
            <div
              class="login__form__fields"
            >
              <div
                class="input-text"
              >
                <label
                  class="input-text__label"
                  name="text"
                >
                  Name
                </label>
                <div
                  class="input-text__formControl"
                >
                  <span>
                     
                    <svg
                      fill="currentColor"
                      height="1em"
                      stroke="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                      />
                    </svg>
                  </span>
                  <input
                    class="input-text__formControl__input"
                    name="name"
                    placeholder="Name"
                    type="text"
                    value=""
                  />
                </div>
              </div>
              <div
                class="input-text"
              >
                <label
                  class="input-text__label"
                  name="email"
                >
                  Email
                </label>
                <div
                  class="input-text__formControl"
                >
                  <span>
                     
                    <svg
                      fill="currentColor"
                      height="1em"
                      stroke="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                      />
                    </svg>
                  </span>
                  <input
                    class="input-text__formControl__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value=""
                  />
                </div>
              </div>
            </div>
            <div
              class="login__form__button"
            >
              <button
                class="login__form__button__btn"
                type="submit"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </section>
    `);
  });
});
