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
  // console.log(username);
  // console.debug("LikedDetail", "currentUser=", currentUser);

  const [likedquotes, seeLike] = useState([]);

  useEffect(function getLikedQuoteAndQuotesForUser() {
    async function getLikedQuote(username) {
      // console.log(username);
      let x = await QuotableApi.getLikedQuote(username);
      // console.log(x[0].title);
      seeLike((old) => [...old, ...x]);
    }
    getLikedQuote(username);
  }, [username]);
  
  if (!likedquotes) return <LoadingSpinner />;
  console.log(likedquotes);

  // const makeLike = likedQuote => likedQuote;
  // const likedQuoteArray = [likedquote];
  // const likedArray = likedQuoteArray.map(makeLike);
  // console.log(likedArray[0]);

    return (
      <div>
          <ul>
         {likedquotes.map((likedquote) => (
           <li>"{likedquote.title}"</li>
         ))}
          </ul>
        </div>
  );  
  }

export default ProfileLikes;


