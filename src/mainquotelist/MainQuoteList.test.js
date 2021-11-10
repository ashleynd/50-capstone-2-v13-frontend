import React from "react";
import { render } from "@testing-library/react";
import MainQuoteList from "./MainQuoteList";
import { UserProvider } from "../testUtils";

it("matches snapshot", function () {
  const { asFragment } = render(
      <UserProvider>
        <MainQuoteList />
      </UserProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("renders without crashing", function() {
  render(<MainQuoteList />);
});
