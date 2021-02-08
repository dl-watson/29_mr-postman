import React from "react";
import { render, cleanup } from "@testing-library/react";
import NavigationBar from "../NavigationBar";

describe("NavigationBar component", () => {
  afterEach(() => cleanup());
  it("renders NavigationBar", () => {
    const { asFragment } = render(<NavigationBar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
