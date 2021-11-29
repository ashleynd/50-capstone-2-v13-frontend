import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import UserContext from "../auth/UserContext";
// import RandomQuote from "../RandomQuote/RandomQuote";
import MainQuoteList from "../mainquotelist/MainQuoteList";
// import MainQuoteList2 from "../mainquotelist/MainQuoteList2";

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
  // console.debug("Homepage", "currentUser=", currentUser);

  return (
      <div className="App">
        <div className="container text-center">
          <h1 className="headline"><span role="img" aria-label="cloud">💭</span>Quotable</h1>
          {/* <p className="lead">Browse quotes from popular authors.</p> */}
          <p className="lead">Browse or favorite famous quotes from over 100 authors, or post your own quotes.</p>
          {currentUser
              ? <h2>
                <span role="img" aria-label="handwave">👋🏻</span>Welcome, {currentUser.firstName || currentUser.username}!
                {/* <RandomQuote /> */}
              </h2>
              : (
                <p>
                    <Link className="home-btn"
                          to="/login">
                      Log in
                    </Link>
                    <Link className="home-btn"
                          to="/signup">
                      Sign up
                    </Link>
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
