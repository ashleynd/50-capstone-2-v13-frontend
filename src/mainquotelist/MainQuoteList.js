// import React, { useState, useEffect } from "react";
import React from "react";
import useFetch from "../hooks/useFetch";
import { Container, Row, Col } from "reactstrap";
// import LikeButton from "./LikeButton";
// import QuotableApi from "../api/api";
// import QuoteCardList from "../quotes/QuoteCardList";
import LoadingSpinner from "../common/LoadingSpinner";
import './MainQuoteList.css';

const MainQuoteList = () => {
  // const data = useFetch("https://goquotes-api.herokuapp.com/api/v1/random?count=101");
  const data = useFetch("https://quotable.io/quotes?page=1");
  if (data.isLoading) {
    // return <div>Loading...</div>;
    return <div className="loading"><LoadingSpinner /></div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :(</div>
    }

  const quote = data.response;
  // console.log(quote)
  // console.log(quote.results[0].content);
  // console.log(quote.results[0].author);
  // console.log(quote.results[1].content);
  // console.log(quote.results[1].author);

  
  // console.log(quote.quotes)
  const quotezero = quote.results[0].content;
  const authorzero = quote.results[0].author;
  const quoteone = quote.results[1].content;
  const authorone = quote.results[1].author;
  const quotetwo = quote.results[2].content;
  const authortwo = quote.results[2].author;
  const quotethree = quote.results[3].content;
  const authorthree = quote.results[3].author;
  const quotefour = quote.results[4].content;
  const authorfour = quote.results[4].author;
  const quotefive = quote.results[5].content;
  const authorfive = quote.results[5].author;
  const quotesix = quote.results[6].content;
  const authorsix = quote.results[6].author;
  const quoteseven = quote.results[7].content;
  const authorseven = quote.results[7].author;
  const quoteeight = quote.results[8].content;
  const authoreight = quote.results[8].author;
  const quotenine = quote.results[9].content;
  const authornine = quote.results[9].author;
  const quoteten = quote.results[10].content;
  const authorten = quote.results[10].author;
  const quoteeleven = quote.results[11].content;
  const authoreleven = quote.results[11].author;
  const quotetwelve = quote.results[12].content;
  const authortwelve = quote.results[12].author;
  const quotethirteen = quote.results[13].content;
  const authorthirteen = quote.results[13].author;
  const quotefourteen = quote.results[14].content;
  const authorfourteen = quote.results[14].author;
  const quotefifteen = quote.results[15].content;
  const authorfifteen = quote.results[15].author;
  const quotesixteen = quote.results[16].content;
  const authorsixteen = quote.results[16].author;
  const quoteseventeen = quote.results[17].content;
  const authorseventeen = quote.results[17].author;
  const quoteeighteen = quote.results[18].content;
  const authoreighteen = quote.results[18].author;
  // const quotesnineteen = quote.results[19].content;
  // const authorsnineteen = quote.results[19].author;


  
  return (
    // <div className="card-list" style={{ display: "flex", flexWrap: "wrap" }}>
    <div className="card-list">
      <Container>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotezero}"</p>
        <p><small>--{authorzero}</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quoteone}"</p>
        <p><small>--{authorone}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotetwo}"</p>
        <p><small>--{authortwo}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotethree}"</p>
        <p><small>--{authorthree}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotefour}"</p>
        <p><small>--{authorfour}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotefive}"</p>
        <p><small>--{authorfive}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesix}"</p>
        <p><small>--{authorsix}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quoteseven}"</p>
        <p><small>--{authorseven}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quoteeight}"</p>
        <p><small>--{authoreight}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotenine}"</p>
        <p><small>--{authornine}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quoteten}"</p>
        <p><small>--{authorten}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quoteeleven}"</p>
        <p><small>--{authoreleven}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotetwelve}"</p>
        <p><small>--{authortwelve}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotethirteen}"</p>
        <p><small>--{authorthirteen}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotefourteen}"</p>
        <p><small>--{authorfourteen}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotefifteen}"</p>
        <p><small>--{authorfifteen}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesixteen}"</p>
        <p><small>--{authorsixteen}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quoteseventeen}"</p>
        <p><small>--{authorseventeen}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quoteeighteen}"</p>
        <p><small>--{authoreighteen}</small></p>
      </div>
      </Col>
        {/* <Col>
      <div className="thoughtBubble2">
        <p>"{quotesnineteen}"</p>
        <p><small>--{authorsnineteen}</small></p>
      </div>
      </Col> */}
      </Row>
      </Container>
      </div>
  );
  
};

export default MainQuoteList;