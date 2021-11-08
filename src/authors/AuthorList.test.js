import React from "react";
import { render } from "@testing-library/react";
import Authors from "./AuthorList";

it("renders without crashing", function() {
  render(<Authors />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Authors />);
  expect(asFragment()).toMatchSnapshot();
});
