import React from "react";
import { render } from "@testing-library/react";
import QuoteCard from "./QuoteCard";
import { UserProvider } from "../testUtils";


it("matches snapshot", function () {
  let item = { title: "CEO", salary: 0, equity: 0 };
  const { asFragment } = render(
      <UserProvider>
        <QuoteCard item={item} />
      </UserProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});

