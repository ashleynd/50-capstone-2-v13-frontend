import React from "react";
import { render } from "@testing-library/react";
import Homepage from "./Homepage";
import { UserProvider } from "../testUtils";

it("matches snapshot", function () {
  const { asFragment } = render(
      <UserProvider>
        <Homepage />
      </UserProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});

