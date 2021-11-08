import React from "react";
import { Link } from "react-router-dom";

import "./AuthorCard.css";

/** Show limited information about a author
 *
 * Is rendered by AuthorList to show a "card" for each author.
 *
 * AuthorList -> AuthorCard
 */

function AuthorCard({ name, description, logoUrl, handle }) {
  console.debug("AuthorCard");

  return (
      <Link className="AuthorCard-authors card" to={`/authors/${handle}`}>
        <div className="card-body-authors">
          <h6 className="card-title-authors">
            {name}
            {/* {logoUrl && <img src={logoUrl}
                             alt={name}
                             className="float-right ml-5" />} */}
          </h6>
          <p><small>{description}</small></p>
        </div>
      </Link>
  );
}

export default AuthorCard;
