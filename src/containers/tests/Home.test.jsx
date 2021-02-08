global.fetch = require("node-fetch");

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../Home";

describe("Resty container", () => {
  it("tests resty input", () => {
    render(<Home />);

    const URLInput = screen.getByPlaceholderText("URL to query ...");
    userEvent.type(URLInput, "https://jsonplaceholder.typicode.com/posts/1");

    const getRadio = screen.getByText("GET");
    userEvent.click(getRadio);

    const submitButton = screen.getByText("Go");
    userEvent.click(submitButton);

    const JSONViewer = screen.getByTestId("response-viewer");
    return waitFor(() => {
      expect(JSONViewer).not.toBeEmptyDOMElement;
    });
  });
});
