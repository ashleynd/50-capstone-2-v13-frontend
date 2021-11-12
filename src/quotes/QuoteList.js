import React, { useState, useEffect } from "react";
import Search from "../common/SearchForm";
import QuotableApi from "../api/api";
import QuoteCardList from "./QuoteCardList";
import LoadingSpinner from "../common/LoadingSpinner";

/** Show page with list of quotes.
 *
 * On mount, loads quotes from API.
 * Re-loads filtered quotes on submit from search form.
 *
 * QuoteList -> QuoteCardList -> QuoteCard
 *
 * This is routed to at /quotes
 */

function QuoteList() {
  // console.debug("QuoteList");

  const [quotes, setQuotes] = useState(null);

  useEffect(function getAllQuotesOnMount() {
    // console.debug("QuoteList useEffect getAllQuotesOnMount");
    search();
  }, []);

  /** Triggered by search form submit; reloads quotes. */
  async function search(title) {
    let quotes = await QuotableApi.getQuotes(title);
    setQuotes(quotes);
  }

  if (!quotes) return <LoadingSpinner />;

  return (
    <div className="QuoteList col-md-8 offset-md-2">
      <div className="searchbar">
        <Search searchFor={search} />
      </div>
        {quotes.length
            ? <QuoteCardList quotes={quotes} />
            : <p className="lead">Sorry, no results were found!</p>
        }
      </div>
  );
}

export default QuoteList;
