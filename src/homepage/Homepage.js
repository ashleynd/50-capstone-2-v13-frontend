import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import "./Homepage.css";
import UserContext from "../auth/UserContext";
// import RandomQuote from "../RandomQuote/RandomQuote";
import MainQuoteList from "../mainquotelist/MainQuoteList";

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function Homepage() {
  const { currentUser } = useContext(UserContext);
  console.debug("Homepage", "currentUser=", currentUser);

  return (
      <div className="App">
        <div className="container text-center">
          <h1 className="headline">Quotable</h1>
          {/* <p className="lead">Browse quotes from popular authors.</p> */}
          <p className="lead">Join or login to view and like more famous quotes, and post your own quotes.</p>
          {currentUser
              ? <h2>
                Welcome Back, {currentUser.firstName || currentUser.username}!
                {/* <RandomQuote /> */}
              </h2>
              : (
                <p>
                    {/* <Link className="btn btn-primary font-weight-bold mr-3"
                          to="/login">
                      Log in
                    </Link>
                    <Link className="btn btn-primary font-weight-bold"
                          to="/signup">
                      Sign up
                    </Link> */}
                  </p>
              )}
              <div className="listofquotes" style={{ display: "flex", flexWrap: "wrap" }}>
              <MainQuoteList />
              </div>
        </div>
      </div>
  );
}

export default Homepage;
