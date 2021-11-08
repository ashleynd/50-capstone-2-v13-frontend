import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QuotableApi from "../api/api";
import QuoteCardList from "../quotes/QuoteCardList";
import LoadingSpinner from "../common/LoadingSpinner";

/** Author Detail page.
 *
 * Renders information about author, along with the quotes at that author.
 *
 * Routed at /authors/:handle
 *
 * Routes -> AuthorDetail -> QuoteCardList
 */

function AuthorDetail() {
  const { handle } = useParams();
  console.debug("AuthorDetail", "handle=", handle);

  const [author, setAuthor] = useState(null);

  useEffect(function getAuthorAndQuotesForUser() {
    async function getAuthor() {
      setAuthor(await QuotableApi.getAuthor(handle));
    }
    getAuthor();
  }, [handle]);

  if (!author) return <LoadingSpinner />;

  return (
      <div className="AuthorDetail col-md-8 offset-md-2">
        <h4>{author.name}</h4>
        <p>{author.description}</p>
        <QuoteCardList quotes={author.quotes} />
      </div>
  );
}

export default AuthorDetail;
