import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";
import App from "../../App";

describe("<Dashboard />", () => {
  it("should run without crashing", () => {
    render(<Dashboard />);
    cleanup();
  });

  it("Should increase ball count on button press", () => {
    let state = {
      balls: 0,
      strikes: 0
    };
    let { getByTestId } = render(<App state={state} />);
    const ballBTN = getByTestId("ballBTN");

    fireEvent.click(ballBTN);
    let ballCount = getByTestId("ballCount").textContent;
    expect(ballCount).toEqual((state.balls + 1).toString());
    cleanup();
  });

  it("Should increase strike count on button press", () => {
    let state = {
      balls: 0,
      strikes: 0
    };
    let { getByTestId } = render(<App state={state} />);

    const strikeBTN = getByTestId("strikeBTN");

    fireEvent.click(strikeBTN);
    const strikeCount = getByTestId("strikesCount").textContent;
    expect(strikeCount).toEqual((state.strikes + 1).toString());
    cleanup();
  });

  it("Should increase strike count on button press", () => {
    const state = {
      balls: 0,
      strikes: 0
    };
    let { getByTestId } = render(<App state={state} />);
    const foulBTN = getByTestId("foulBTN");

    fireEvent.click(foulBTN);
    const strikesCount = getByTestId("strikesCount").textContent;
    expect(strikesCount).toEqual((state.strikes + 1).toString());
    cleanup();
  });

  it("Should return both ball and strike count to zero on button press", () => {
    const state = {
      balls: 0,
      strikes: 0
    };
    let { getByTestId } = render(<App state={state} />);
    const hitBTN = getByTestId("hitBTN");

    fireEvent.click(hitBTN);
    const ballCount = getByTestId("ballCount").textContent;
    const strikeCount = getByTestId("strikesCount").textContent;
    expect(ballCount).toEqual((state.balls = 0).toString());
    expect(strikeCount).toEqual((state.strikes = 0).toString());
    cleanup();
  });
});
