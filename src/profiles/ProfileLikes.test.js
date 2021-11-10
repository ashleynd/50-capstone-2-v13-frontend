import React from "react";
import { render } from "@testing-library/react";
import ProfileLikes from "./ProfileLikes";
import { UserProvider } from "../testUtils";

it("matches snapshot", function () {
  const { asFragment } = render(
      <UserProvider>
        <ProfileLikes />
      </UserProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});


