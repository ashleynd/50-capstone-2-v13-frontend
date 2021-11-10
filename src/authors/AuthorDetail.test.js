import React from "react";
import { render } from "@testing-library/react";
import Author from "./AuthorDetail";
import { MemoryRouter } from "react-router-dom";
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


