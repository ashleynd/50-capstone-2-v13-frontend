import React from "react";
import useFetch from "../hooks/useFetch";
import { Container, Row, Col } from "reactstrap";
// import LikeButton from "./LikeButton";
import LoadingSpinner from "../common/LoadingSpinner";
import './MainQuoteList.css';


const MainQuoteList = () => {
  const data = useFetch("https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/quotes/");
  if (data.isLoading) {
    // return <div>Loading...</div>;
    return <div className="loading"><LoadingSpinner /></div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :(</div>
    }

  const quote = data.response;
  const quotezero = quote[0].q;
  const authorzero = quote[0].a;
  const quoteone = quote[1].q;
  const authorone = quote[1].a;
  const quotetwo = quote[2].q;
  const authortwo = quote[2].a;
  const quotethree = quote[3].q;
  const authorthree = quote[3].a;
  const quotefour = quote[4].q;
  const authorfour = quote[4].a;
  const quotefive = quote[5].q;
  const authorfive = quote[5].a;
  const quotesix = quote[6].q;
  const authorsix = quote[6].a;
  const quoteseven = quote[7].q;
  const authorseven = quote[7].a;
  const quoteeight = quote[8].q;
  const authoreight = quote[8].a;
  const quotenine = quote[9].q;
  const authornine = quote[9].a;
  const quoteten = quote[10].q;
  const authorten = quote[10].a;
  const quoteeleven = quote[11].q;
  const authoreleven = quote[11].a;
  const quotetwelve = quote[12].q;
  const authortwelve = quote[12].a;
  const quotethirteen = quote[13].q;
  const authorthirteen = quote[13].a;
  const quotefourteen = quote[14].q;
  const authorfourteen = quote[14].a;
  const quotefifteen = quote[15].q;
  const authorfifteen = quote[15].a;
  const quotesixteen = quote[16].q;
  const authorsixteen = quote[16].a;
  const quoteseventeen = quote[17].q;
  const authorseventeen = quote[17].a;
  const quoteeighteen = quote[18].q;
  const authoreighteen = quote[18].a;
  const quotesnineteen = quote[19].q;
  const authorsnineteen = quote[19].a;
  const quotestwenty = quote[20].q;
  const authorstwenty = quote[20].a;
  const quotestwentyone = quote[21].q;
  const authorstwentyone = quote[21].a;
  const quotestwentytwo = quote[22].q;
  const authorstwentytwo = quote[22].a;
  const quotestwentythree = quote[23].q;
  const authorstwentythree = quote[23].a;
  const quotestwentyfour = quote[24].q;
  const authorstwentyfour = quote[24].a;
  const quotestwentyfive = quote[25].q;
  const authorstwentyfive = quote[25].a;
  const quotestwentysix = quote[26].q;
  const authorstwentysix = quote[26].a;
  const quotestwentyseven = quote[27].q;
  const authorstwentyseven = quote[27].a;
  const quotestwentyeight = quote[28].q;
  const authorstwentyeight = quote[28].a;
  const quotestwentynine = quote[29].q;
  const authorstwentynine = quote[29].a;
  const quotesthirty = quote[30].q;
  const authorsthirty = quote[30].a;
  const quotesthirtyone = quote[31].q;
  const authorsthirtyone = quote[31].a;
  const quotesthirtytwo = quote[32].q;
  const authorsthirtytwo = quote[32].a;
  const quotesthirtythree = quote[33].q;
  const authorsthirtythree = quote[33].a;
  const quotesthirtyfour = quote[34].q;
  const authorsthirtyfour = quote[34].a;
  const quotesthirtyfive = quote[35].q;
  const authorsthirtyfive = quote[35].a;
  const quotesthirtysix = quote[36].q;
  const authorsthirtysix = quote[36].a;
  const quotesthirtyseven = quote[37].q;
  const authorsthirtyseven = quote[37].a;
  const quotesthirtyeight = quote[38].q;
  const authorsthirtyeight = quote[38].a;
  const quotesthirtynine = quote[39].q;
  const authorsthirtynine = quote[39].a;
  const quotesfourty = quote[40].q;
  const authorsfourty = quote[40].a;
  const quotesfourtyone = quote[41].q;
  const authorsfourtyone = quote[41].a;
  const quotesfourtytwo = quote[42].q;
  const authorsfourtytwo = quote[42].a;
  const quotesfourtythree = quote[43].q;
  const authorsfourtythree = quote[43].a;
  const quotesfourtyfour = quote[44].q;
  const authorsfourtyfour = quote[44].a;
  const quotesfourtyfive = quote[45].q;
  const authorsfourtyfive = quote[45].a;
  const quotesfourtysix = quote[46].q;
  const authorsfourtysix = quote[46].a;
  const quotesfourtyseven = quote[47].q;
  const authorsfourtyseven = quote[47].a;
  const quotesfourtyeight = quote[48].q;
  const authorsfourtyeight = quote[48].a;
  const quotesfourtynine = quote[49].q;
  const authorsfourtynine = quote[49].a;


  return (
    // <div className="card-list" style={{ display: "flex", flexWrap: "wrap" }}>
    <div className="card-list">
      <Container>
      <Row xs="3">
        <Col>
      <div className="card">
        <p>"{quotezero}"</p>
        <p><small>--{authorzero}</small></p>
      </div>
        </Col>
        <Col>
      <div className="card">
        <p>"{quoteone}"</p>
        <p><small>--{authorone}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotetwo}"</p>
        <p><small>--{authortwo}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotethree}"</p>
        <p><small>--{authorthree}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotefour}"</p>
        <p><small>--{authorfour}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotefive}"</p>
        <p><small>--{authorfive}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesix}"</p>
        <p><small>--{authorsix}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quoteseven}"</p>
        <p><small>--{authorseven}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quoteeight}"</p>
        <p><small>--{authoreight}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotenine}"</p>
        <p><small>--{authornine}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quoteten}"</p>
        <p><small>--{authorten}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quoteeleven}"</p>
        <p><small>--{authoreleven}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotetwelve}"</p>
        <p><small>--{authortwelve}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotethirteen}"</p>
        <p><small>--{authorthirteen}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotefourteen}"</p>
        <p><small>--{authorfourteen}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotefifteen}"</p>
        <p><small>--{authorfifteen}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesixteen}"</p>
        <p><small>--{authorsixteen}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quoteseventeen}"</p>
        <p><small>--{authorseventeen}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quoteeighteen}"</p>
        <p><small>--{authoreighteen}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesnineteen}"</p>
        <p><small>--{authorsnineteen}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotestwenty}"</p>
        <p><small>--{authorstwenty}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotestwentyone}"</p>
        <p><small>--{authorstwentyone}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotestwentytwo}"</p>
        <p><small>--{authorstwentytwo}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotestwentythree}"</p>
        <p><small>--{authorstwentythree}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotestwentyfour}"</p>
        <p><small>--{authorstwentyfour}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotestwentyfive}"</p>
        <p><small>--{authorstwentyfive}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotestwentysix}"</p>
        <p><small>--{authorstwentysix}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotestwentyseven}"</p>
        <p><small>--{authorstwentyseven}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotestwentyeight}"</p>
        <p><small>--{authorstwentyeight}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotestwentynine}"</p>
        <p><small>--{authorstwentynine}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesthirty}"</p>
        <p><small>--{authorsthirty}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesthirtyone}"</p>
        <p><small>--{authorsthirtyone}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesthirtytwo}"</p>
        <p><small>--{authorsthirtytwo}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesthirtythree}"</p>
        <p><small>--{authorsthirtythree}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesthirtyfour}"</p>
        <p><small>--{authorsthirtyfour}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesthirtyfive}"</p>
        <p><small>--{authorsthirtyfive}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesthirtysix}"</p>
        <p><small>--{authorsthirtysix}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesthirtyseven}"</p>
        <p><small>--{authorsthirtyseven}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesthirtyeight}"</p>
        <p><small>--{authorsthirtyeight}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesthirtynine}"</p>
        <p><small>--{authorsthirtynine}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesfourty}"</p>
        <p><small>--{authorsfourty}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesfourtyone}"</p>
        <p><small>--{authorsfourtyone}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesfourtytwo}"</p>
        <p><small>--{authorsfourtytwo}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesfourtythree}"</p>
        <p><small>--{authorsfourtythree}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesfourtyfour}"</p>
        <p><small>--{authorsfourtyfour}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesfourtyfive}"</p>
        <p><small>--{authorsfourtyfive}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesfourtysix}"</p>
        <p><small>--{authorsfourtysix}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesfourtyseven}"</p>
        <p><small>--{authorsfourtyseven}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesfourtyeight}"</p>
        <p><small>--{authorsfourtyeight}</small></p>
      </div>
      </Col>
        <Col>
      <div className="card">
        <p>"{quotesfourtynine}"</p>
        <p><small>--{authorsfourtynine}</small></p>
      </div>
      </Col>
      </Row>
      </Container>
      </div>
  );
};

export default MainQuoteList;