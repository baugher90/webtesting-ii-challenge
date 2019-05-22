import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "./Display";
import Dashboard from "../dashboard/Dashboard";

describe("<Display />", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });
  it("should display strikes and balls", () => {
    const { getByText } = render(<Display />);
    getByText(/strikes/i);
    getByText(/balls/i);
    
  });
});