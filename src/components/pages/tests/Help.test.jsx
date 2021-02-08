import React from "react";
import { render, cleanup } from "@testing-library/react";
import Help from "../Help";

describe("Help component", () => {
  afterEach(() => cleanup());
  it("renders Help", () => {
    const { asFragment } = render(<Help />);
    expect(asFragment()).toMatchSnapshot();
  });
});
