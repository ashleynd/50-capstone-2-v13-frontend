import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import AuthorList from "../authors/AuthorList";
import QuoteList from "../quotes/QuoteList";
import AuthorDetail from "../authors/AuthorDetail";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";
import CommunityQuotesRoutes from "./CommunityQuotesRoutes";
import QuoteOfTheDay from "../QOTD/QuoteOfTheDay";
import About from "../about/About";
import MainQuoteList from "../mainquotelist/MainQuoteList";

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Routes({ login, signup }) {
  // console.debug(
  //     "Routes",
  //     `login=${typeof login}`,
  //     `register=${typeof register}`,
  // );

  return (
      <div className="pt-5">
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/login">
            <LoginForm login={login} />
          </Route>

          <Route exact path="/signup">
            <SignupForm signup={signup} />
          </Route>

          <Route exact path="/quoteoftheday">
            <QuoteOfTheDay />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <PrivateRoute exact path="/famousauthors">
            <AuthorList />
          </PrivateRoute>

          <PrivateRoute exact path="/famousquotes">
            <QuoteList />
          </PrivateRoute>

          <PrivateRoute exact path="/quoteoftheday">
            <QuoteOfTheDay />
          </PrivateRoute>

          <PrivateRoute exact path="/authors/:handle">
            <AuthorDetail />
          </PrivateRoute>

          <PrivateRoute exact path="/mainquotelist">
            <MainQuoteList />
          </PrivateRoute>

          <PrivateRoute path="/profile">
            <ProfileForm />
          </PrivateRoute>

          <PrivateRoute path="/communityquotes">
            <CommunityQuotesRoutes />
          </PrivateRoute>

          <Redirect to="/" />
        </Switch>
      </div>
  );
}

export default Routes;
