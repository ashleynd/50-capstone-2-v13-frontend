import React, { useState, useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
import QuotableApi from "../api/api";
import UserContext from "../auth/UserContext";
import LoadingSpinner from "../common/LoadingSpinner";
import './ProfileForm.css';

/** Like Detail page.
 *
 * Renders information about like, along with the quotes at that like.
 *
 * Routed at /likes/:handle
 *
 * Routes -> LikeDetail -> QuoteCardList
 */

function ProfileLikes() {
  const { currentUser } = useContext(UserContext);
  const { username } = currentUser;


  const [likedquotes, seeLike] = useState([]);

  useEffect(function getLikedQuoteAndQuotesForUser() {
    async function getLikedQuote(username) {
      let x = await QuotableApi.getLikedQuote(username);
      seeLike((old) => [...old, ...x]);
    }
    getLikedQuote(username);
  }, [username]);
  
  if (!likedquotes) return <LoadingSpinner />;

    return (
      <div>
          <ul>
         {likedquotes.map((likedquote) => (
          //  <li className="favorite-quote">"{likedquote.title}"</li>
           <li className="favorite-quote"><span role="img" aria-label="cloud">💭</span> "{likedquote.title}"</li>
         ))}
          </ul>
        </div>
  );  
  }

export default ProfileLikes;


