import React from "react";
import { render, cleanup } from "@testing-library/react";
import UserInterface from "../UserInterface";

describe("UserInterface component", () => {
  afterEach(() => cleanup());
  const testFunction = () => true;
  it("renders UserInterface", () => {
    const { asFragment } = render(
      <UserInterface
        handleChange={testFunction}
        handleSubmit={testFunction}
        results={"results"}
        method={"method"}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
