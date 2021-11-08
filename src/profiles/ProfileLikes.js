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

  const [likedquote, seeLike] = useState([]);

  useEffect(function getLikedQuoteAndQuotesForUser() {
    async function getLikedQuote(username) {
      // console.log(username);
      let x = await QuotableApi.getLikedQuote(username);
      // console.log(x[0].title);
      seeLike((old) => [...old, ...x]);
    }
    getLikedQuote(username);
  }, [username]);

  if (!likedquote) return <LoadingSpinner />;

  return (
      <div>
        <ul>
          <li className="favorite-list">{JSON.stringify(likedquote[0])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[1])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[2])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[3])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[4])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[5])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[6])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[7])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[8])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[289])}</li>
        </ul>
      </div>
  );
}

export default ProfileLikes;

// var str = '{"title":"Some people feel the rain. Others just get wet."}';
// var str = '{"title":"All our dreams can come true, if we have the courage to pursue them."}';
// var str = '{"title":"Better to die fighting for freedom then be a prisoner all the days of your life."}';
// var str = '{"title":"When one door closes another door opens."}';
// var result = str.replace('"title','').replace('{','').replace('}','').replace('"','').replace(':','');
// console.log(result);


// var str = '{"title":"When one door closes another door opens."}';
// var result = str.replace('"title','').replace('{','').replace('}','').replace('"','').replace(':','');
// console.log(result);

// function replacer(key, value) {
//   // Filtering out properties
//   if (typeof value === 'string') {
//     return undefined;
//   }
//   return value;
// }

// var foo = {"title":"When one door closes another door opens."};
// JSON.stringify(foo, replacer);
// console.log(replacer(foo, replacer))