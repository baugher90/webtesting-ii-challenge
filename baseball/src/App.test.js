import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import App from "./App";

describe("<App/>", () => {
  it("renders without crashing", () => {
    render(<App />);
    cleanup();
  });
});