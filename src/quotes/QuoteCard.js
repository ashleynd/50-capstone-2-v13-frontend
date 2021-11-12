import React, { useContext, useState } from "react";
// import { Container, Row, Col } from "reactstrap";
import "./QuoteCard.css";
// import "./QuoteList.css";
import "./LikeButton.css";
import UserContext from "../auth/UserContext";

/** Show limited information about a quote.
 *
 * Is rendered by QuoteCardList to show a "card" for each quote.
 *
 * Receives like func prop from parent, which is called on like.
 *
 * QuoteCardList -> QuoteCard
 */


function QuoteCard({ id, title, authorName }) {
  // console.debug("QuoteCard");


  const { hasLikedAQuote, LikedQuote } = useContext(UserContext);
  const [isLiked, setisLiked] = useState(true);

  React.useEffect(function updateLikedStatus() {
    // console.debug("QuoteCard useEffect updateLikedStatus", "id=", id);
    setisLiked(hasLikedAQuote(id));
  }, [id, hasLikedAQuote]);

  /** Like a quote */
  async function handleLike(evt) {
    if (hasLikedAQuote(id)) return;
    LikedQuote(id);
    setisLiked(true);
  }



  return (
    <div className="author-card-list">
       {/* <Container>
         <Row xs="4">
          <Col> */}
      <div className="author-card"> {isLiked}
          <h6 className="quote-txt">"{title}"</h6>
          <p><small>{authorName}</small></p>
          <button className={isLiked ? 'Mode-like' : 'Mode-unlike'} onClick={handleLike}>{isLiked ? "Added to Favorites ✅" : "Add to Favorites ❤️"}</button>
        </div>
          {/* </Col>
          </Row>
          </Container> */}
        </div>
  );
}



export default QuoteCard;

