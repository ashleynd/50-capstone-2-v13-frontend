import React, { useState, useEffect } from "react";
import SearchForm from "../common/SearchForm";
import QuotableApi from "../api/api";
import AuthorCard from "./AuthorCard";
import LoadingSpinner from "../common/LoadingSpinner";
import './AuthorList.css';

/** Show page with list of authors.
 *
 * On mount, loads authors from API.
 * Re-loads filtered authors on submit from search form.
 *
 * This is routed to at /authors
 *
 * Routes -> { AuthorCard, SearchForm }
 */

function AuthorList() {
  // console.debug("AuthorList");

  const [authors, setAuthors] = useState(null);

  useEffect(function getAuthorsOnMount() {
    // console.debug("AuthorList useEffect getAuthorsOnMount");
    search();
  }, []);

  /** Triggered by search form submit; reloads authors. */
  async function search(name) {
    let authors = await QuotableApi.getAuthors(name);
    setAuthors(authors);
  }

  if (!authors) return <LoadingSpinner />;

  return (
      <div className="AuthorList col-md-8 offset-md-2">
        <SearchForm searchFor={search} />
        <div>

        {authors.length
            ? (
                <div className="AuthorList-list">
                  {authors.map(c => (
                      <AuthorCard
                          key={c.handle}
                          handle={c.handle}
                          name={c.name}
                          description={c.description}
                          logoUrl={c.logoUrl}
                      />
                  ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
        </div>
      </div>
  );
}

export default AuthorList;
