import React from "react";
import { Container, Row, Col } from "reactstrap";
import QuoteCard from "./QuoteCard";
import "./QuoteCardList.css";

/** Show list of quote cards.
 *
 * Used by both QuoteList and AuthorDetail to list quotes. Receives a like
 * func prop which will be called by QuoteCard on like.
 *
 * QuoteList -> QuoteCardList -> QuoteCard
 * AuthorDetail -> QuoteCardList -> QuoteCard
 *
 */

function QuoteCardList({ quotes, isLiked }) {
  // console.debug("QuoteCardList", "quotes=", quotes);

  return (
          <Container className="container">
          <Row xs={1} md={3} className="row">
           <Col className="j-column">
      <div className="QuoteCardList">
        {quotes.map(quote => (
            <QuoteCard
                key={quote.id}
                id={quote.id}
                title={quote.title}
                salary={quote.salary}
                equity={quote.equity}
                authorName={quote.authorName}
            />
            ))}
      </div>
            </Col>
           </Row>
             </Container>
  );
}

export default QuoteCardList;
