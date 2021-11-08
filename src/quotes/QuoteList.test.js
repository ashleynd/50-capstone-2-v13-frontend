import React from "react";
import { render } from "@testing-library/react";
import Quotes from "./QuoteList";

it("renders without crashing", function() {
  render(<Quotes />);
});

it("matches snapshot with no quotes", function() {
  const { asFragment } = render(<Quotes />);
  expect(asFragment()).toMatchSnapshot();
});
