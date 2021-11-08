import React from "react";
import { render } from "@testing-library/react";
import Author from "./AuthorDetail";
import { MemoryRouter, Route } from "react-router-dom";
import { UserProvider } from "../testUtils";


it("renders without crashing", function () {
  render(
      <MemoryRouter>
        <UserProvider>
          <Author />
        </UserProvider>
      </MemoryRouter>,
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter initialEntries={["/author/ibm"]}>
        <UserProvider>
          <Route path="/author/:handle">
            <Author />
          </Route>
        </UserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
