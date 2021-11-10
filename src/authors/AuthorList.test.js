import React from "react";
import { render } from "@testing-library/react";
import Authors from "./AuthorList";
import { UserProvider } from "../testUtils";

it("renders without crashing", function() {
  render(<Authors />);
});


it("matches snapshot", function () {
  const { asFragment } = render(
      <UserProvider>
        <Authors />
      </UserProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
