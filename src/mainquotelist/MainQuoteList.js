import React from "react";
import useFetch from "../hooks/useFetch";
import { Container, Row, Col } from "reactstrap";
// import LikeButton from "./LikeButton";
import LoadingSpinner from "../common/LoadingSpinner";
import './MainQuoteList.css';

const MainQuoteList = () => {
  const data = useFetch("https://goquotes-api.herokuapp.com/api/v1/random?count=101");
  if (data.isLoading) {
    // return <div>Loading...</div>;
    return <div className="loading"><LoadingSpinner /></div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :(</div>
    }

  const quote = data.response;
  // console.log(quote.quotes)
  const quotezero = quote.quotes[0].text;
  const authorzero = quote.quotes[0].author;
  const quoteone = quote.quotes[1].text;
  const authorone = quote.quotes[1].author;
  const quotetwo = quote.quotes[2].text;
  const authortwo = quote.quotes[2].author;
  const quotethree = quote.quotes[3].text;
  const authorthree = quote.quotes[3].author;
  const quotefour = quote.quotes[4].text;
  const authorfour = quote.quotes[4].author;
  const quotefive = quote.quotes[5].text;
  const authorfive = quote.quotes[5].author;
  const quotesix = quote.quotes[6].text;
  const authorsix = quote.quotes[6].author;
  const quoteseven = quote.quotes[7].text;
  const authorseven = quote.quotes[7].author;
  const quoteeight = quote.quotes[8].text;
  const authoreight = quote.quotes[8].author;
  const quotenine = quote.quotes[9].text;
  const authornine = quote.quotes[9].author;
  const quoteten = quote.quotes[10].text;
  const authorten = quote.quotes[10].author;
  const quoteeleven = quote.quotes[11].text;
  const authoreleven = quote.quotes[11].author;
  const quotetwelve = quote.quotes[12].text;
  const authortwelve = quote.quotes[12].author;
  const quotethirteen = quote.quotes[13].text;
  const authorthirteen = quote.quotes[13].author;
  const quotefourteen = quote.quotes[14].text;
  const authorfourteen = quote.quotes[14].author;
  const quotefifteen = quote.quotes[15].text;
  const authorfifteen = quote.quotes[15].author;
  const quotesixteen = quote.quotes[16].text;
  const authorsixteen = quote.quotes[16].author;
  const quoteseventeen = quote.quotes[17].text;
  const authorseventeen = quote.quotes[17].author;
  const quoteeighteen = quote.quotes[18].text;
  const authoreighteen = quote.quotes[18].author;
  const quotesnineteen = quote.quotes[19].text;
  const authorsnineteen = quote.quotes[19].author;
  const quotestwenty = quote.quotes[20].text;
  const authorstwenty = quote.quotes[20].author;
  const quotestwentyone = quote.quotes[21].text;
  const authorstwentyone = quote.quotes[21].author;
  const quotestwentytwo = quote.quotes[22].text;
  const authorstwentytwo = quote.quotes[22].author;
  const quotestwentythree = quote.quotes[23].text;
  const authorstwentythree = quote.quotes[23].author;
  const quotestwentyfour = quote.quotes[24].text;
  const authorstwentyfour = quote.quotes[24].author;
  const quotestwentyfive = quote.quotes[25].text;
  const authorstwentyfive = quote.quotes[25].author;
  const quotestwentysix = quote.quotes[26].text;
  const authorstwentysix = quote.quotes[26].author;
  const quotestwentyseven = quote.quotes[27].text;
  const authorstwentyseven = quote.quotes[27].author;
  const quotestwentyeight = quote.quotes[28].text;
  const authorstwentyeight = quote.quotes[28].author;
  const quotestwentynine = quote.quotes[29].text;
  const authorstwentynine = quote.quotes[29].author;
  const quotesthirty = quote.quotes[30].text;
  const authorsthirty = quote.quotes[30].author;
  const quotesthirtyone = quote.quotes[31].text;
  const authorsthirtyone = quote.quotes[31].author;
  const quotesthirtytwo = quote.quotes[32].text;
  const authorsthirtytwo = quote.quotes[32].author;
  const quotesthirtythree = quote.quotes[33].text;
  const authorsthirtythree = quote.quotes[33].author;
  const quotesthirtyfour = quote.quotes[34].text;
  const authorsthirtyfour = quote.quotes[34].author;
  const quotesthirtyfive = quote.quotes[35].text;
  const authorsthirtyfive = quote.quotes[35].author;
  const quotesthirtysix = quote.quotes[36].text;
  const authorsthirtysix = quote.quotes[36].author;
  const quotesthirtyseven = quote.quotes[37].text;
  const authorsthirtyseven = quote.quotes[37].author;
  const quotesthirtyeight = quote.quotes[38].text;
  const authorsthirtyeight = quote.quotes[38].author;
  const quotesthirtynine = quote.quotes[39].text;
  const authorsthirtynine = quote.quotes[39].author;
  const quotesfourty = quote.quotes[40].text;
  const authorsfourty = quote.quotes[40].author;
  const quotesfourtyone = quote.quotes[41].text;
  const authorsfourtyone = quote.quotes[41].author;
  const quotesfourtytwo = quote.quotes[42].text;
  const authorsfourtytwo = quote.quotes[42].author;
  const quotesfourtythree = quote.quotes[43].text;
  const authorsfourtythree = quote.quotes[43].author;
  const quotesfourtyfour = quote.quotes[44].text;
  const authorsfourtyfour = quote.quotes[44].author;
  const quotesfourtyfive = quote.quotes[45].text;
  const authorsfourtyfive = quote.quotes[45].author;
  const quotesfourtysix = quote.quotes[46].text;
  const authorsfourtysix = quote.quotes[46].author;
  const quotesfourtyseven = quote.quotes[47].text;
  const authorsfourtyseven = quote.quotes[47].author;
  const quotesfourtyeight = quote.quotes[48].text;
  const authorsfourtyeight = quote.quotes[48].author;
  const quotesfourtynine = quote.quotes[49].text;
  const authorsfourtynine = quote.quotes[49].author;
  // 
  const quotesfifty = quote.quotes[50].text;
  const authorsfifty = quote.quotes[50].author;
  const quotesfiftyone = quote.quotes[51].text;
  const authorsfiftyone = quote.quotes[51].author;
  const quotesfiftytwo = quote.quotes[52].text;
  const authorsfiftytwo = quote.quotes[52].author;
  const quotesfiftythree = quote.quotes[53].text;
  const authorsfiftythree = quote.quotes[53].author;
  const quotesfiftyfour = quote.quotes[54].text;
  const authorsfiftyfour = quote.quotes[54].author;
  const quotesfiftyfive = quote.quotes[55].text;
  const authorsfiftyfive = quote.quotes[55].author;
  const quotesfiftysix = quote.quotes[56].text;
  const authorsfiftysix = quote.quotes[56].author;
  const quotesfiftyseven = quote.quotes[57].text;
  const authorsfiftyseven = quote.quotes[57].author;
  const quotesfiftyeight = quote.quotes[58].text;
  const authorsfiftyeight = quote.quotes[58].author;
  const quotesfiftynine = quote.quotes[59].text;
  const authorsfiftynine = quote.quotes[59].author;
  const quotessixty = quote.quotes[60].text;
  const authorssixty = quote.quotes[60].author;
  const quotessixtyone = quote.quotes[61].text;
  const authorssixtyone = quote.quotes[61].author;
  const quotessixtytwo = quote.quotes[62].text;
  const authorssixtytwo = quote.quotes[62].author;
  const quotessixtythree = quote.quotes[63].text;
  const authorssixtythree = quote.quotes[63].author;
  const quotessixtyfour = quote.quotes[64].text;
  const authorssixtyfour = quote.quotes[64].author;
  const quotessixtyfive = quote.quotes[65].text;
  const authorssixtyfive = quote.quotes[65].author;
  const quotessixtysix = quote.quotes[66].text;
  const authorssixtysix = quote.quotes[66].author;
  const quotessixtyseven = quote.quotes[67].text;
  const authorssixtyseven = quote.quotes[67].author;
  const quotessixtyeight = quote.quotes[68].text;
  const authorssixtyeight = quote.quotes[68].author;
  const quotessixtynine = quote.quotes[69].text;
  const authorssixtynine = quote.quotes[69].author;
  const quotesseventy = quote.quotes[70].text;
  const authorsseventy = quote.quotes[70].author;
  const quotesseventyone = quote.quotes[71].text;
  const authorsseventyone = quote.quotes[71].author;
  const quotesseventytwo = quote.quotes[72].text;
  const authorsseventytwo = quote.quotes[72].author;
  const quotesseventythree = quote.quotes[73].text;
  const authorsseventythree = quote.quotes[73].author;
  const quotesseventyfour = quote.quotes[74].text;
  const authorsseventyfour = quote.quotes[74].author;
  const quotesseventyfive = quote.quotes[75].text;
  const authorsseventyfive = quote.quotes[75].author;
  const quotesseventysix = quote.quotes[76].text;
  const authorsseventysix = quote.quotes[76].author;
  const quotesseventyseven = quote.quotes[77].text;
  const authorsseventyseven = quote.quotes[77].author;
  const quotesseventyeight = quote.quotes[78].text;
  const authorsseventyeight = quote.quotes[78].author;
  const quotesseventynine = quote.quotes[79].text;
  const authorsseventynine = quote.quotes[79].author;
  const quoteseighty = quote.quotes[80].text;
  const authorseighty = quote.quotes[80].author;
  const quoteseightyone = quote.quotes[81].text;
  const authorseightyone = quote.quotes[81].author;
  const quoteseightytwo = quote.quotes[82].text;
  const authorseightytwo = quote.quotes[82].author;
  const quoteseightythree = quote.quotes[83].text;
  const authorseightythree = quote.quotes[83].author;
  const quoteseightyfour = quote.quotes[84].text;
  const authorseightyfour = quote.quotes[84].author;
  const quoteseightyfive = quote.quotes[85].text;
  const authorseightyfive = quote.quotes[85].author;
  const quoteseightysix = quote.quotes[86].text;
  const authorseightysix = quote.quotes[86].author;
  const quoteseightyseven = quote.quotes[87].text;
  const authorseightyseven = quote.quotes[87].author;
  const quoteseightyeight = quote.quotes[88].text;
  const authorseightyeight = quote.quotes[88].author;
  const quoteseightynine = quote.quotes[89].text;
  const authorseightynine = quote.quotes[89].author;
  const quotesninety = quote.quotes[90].text;
  const authorsninety = quote.quotes[90].author;
  const quotesninetyone = quote.quotes[91].text;
  const authorsninetyone = quote.quotes[91].author;
  const quotesninetytwo = quote.quotes[92].text;
  const authorsninetytwo = quote.quotes[92].author;
  const quotesninetythree = quote.quotes[93].text;
  const authorsninetythree = quote.quotes[93].author;
  const quotesninetyfour = quote.quotes[94].text;
  const authorsninetyfour = quote.quotes[94].author;
  const quotesninetyfive = quote.quotes[95].text;
  const authorsninetyfive = quote.quotes[95].author;
  const quotesninetysix = quote.quotes[96].text;
  const authorsninetysix = quote.quotes[96].author;
  const quotesninetyseven = quote.quotes[97].text;
  const authorsninetyseven = quote.quotes[97].author;
  const quotesninetyeight = quote.quotes[98].text;
  const authorsninetyeight = quote.quotes[98].author;
  const quotesninetynine = quote.quotes[99].text;
  const authorsninetynine = quote.quotes[99].author;
  const quotesonehundred = quote.quotes[100].text;
  const authorsonehundred = quote.quotes[100].author;
  


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
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesnineteen}"</p>
        <p><small>--{authorsnineteen}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotestwenty}"</p>
        <p><small>--{authorstwenty}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotestwentyone}"</p>
        <p><small>--{authorstwentyone}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotestwentytwo}"</p>
        <p><small>--{authorstwentytwo}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotestwentythree}"</p>
        <p><small>--{authorstwentythree}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotestwentyfour}"</p>
        <p><small>--{authorstwentyfour}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotestwentyfive}"</p>
        <p><small>--{authorstwentyfive}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotestwentysix}"</p>
        <p><small>--{authorstwentysix}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotestwentyseven}"</p>
        <p><small>--{authorstwentyseven}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotestwentyeight}"</p>
        <p><small>--{authorstwentyeight}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotestwentynine}"</p>
        <p><small>--{authorstwentynine}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesthirty}"</p>
        <p><small>--{authorsthirty}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesthirtyone}"</p>
        <p><small>--{authorsthirtyone}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesthirtytwo}"</p>
        <p><small>--{authorsthirtytwo}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesthirtythree}"</p>
        <p><small>--{authorsthirtythree}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesthirtyfour}"</p>
        <p><small>--{authorsthirtyfour}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesthirtyfive}"</p>
        <p><small>--{authorsthirtyfive}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesthirtysix}"</p>
        <p><small>--{authorsthirtysix}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesthirtyseven}"</p>
        <p><small>--{authorsthirtyseven}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesthirtyeight}"</p>
        <p><small>--{authorsthirtyeight}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesthirtynine}"</p>
        <p><small>--{authorsthirtynine}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfourty}"</p>
        <p><small>--{authorsfourty}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfourtyone}"</p>
        <p><small>--{authorsfourtyone}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfourtytwo}"</p>
        <p><small>--{authorsfourtytwo}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfourtythree}"</p>
        <p><small>--{authorsfourtythree}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfourtyfour}"</p>
        <p><small>--{authorsfourtyfour}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfourtyfive}"</p>
        <p><small>--{authorsfourtyfive}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfourtysix}"</p>
        <p><small>--{authorsfourtysix}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfourtyseven}"</p>
        <p><small>--{authorsfourtyseven}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfourtyeight}"</p>
        <p><small>--{authorsfourtyeight}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfourtynine}"</p>
        <p><small>--{authorsfourtynine}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfifty}"</p>
        <p><small>--{authorsfifty}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfifty}"</p>
        <p><small>--{authorsfifty}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfiftyone}"</p>
        <p><small>--{authorsfiftyone}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfiftytwo}"</p>
        <p><small>--{authorsfiftytwo}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfiftythree}"</p>
        <p><small>--{authorsfiftythree}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfiftyfour}"</p>
        <p><small>--{authorsfiftyfour}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfiftyfive}"</p>
        <p><small>--{authorsfiftyfive}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfiftysix}"</p>
        <p><small>--{authorsfiftysix}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfiftyseven}"</p>
        <p><small>--{authorsfiftyseven}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfiftyeight}"</p>
        <p><small>--{authorsfiftyeight}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesfiftynine}"</p>
        <p><small>--{authorsfiftynine}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotessixty}"</p>
        <p><small>--{authorssixty}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotessixtyone}"</p>
        <p><small>--{authorssixtyone}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotessixtytwo}"</p>
        <p><small>--{authorssixtytwo}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotessixtythree}"</p>
        <p><small>--{authorssixtythree}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotessixtyfour}"</p>
        <p><small>--{authorssixtyfour}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotessixtyfive}"</p>
        <p><small>--{authorssixtyfive}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotessixtysix}"</p>
        <p><small>--{authorssixtysix}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotessixtyseven}"</p>
        <p><small>--{authorssixtyseven}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotessixtyeight}"</p>
        <p><small>--{authorssixtyeight}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotessixtynine}"</p>
        <p><small>--{authorssixtynine}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesseventy}"</p>
        <p><small>--{authorsseventy}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesseventyone}"</p>
        <p><small>--{authorsseventyone}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesseventytwo}"</p>
        <p><small>--{authorsseventytwo}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesseventythree}"</p>
        <p><small>--{authorsseventythree}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesseventyfour}"</p>
        <p><small>--{authorsseventyfour}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesseventyfive}"</p>
        <p><small>--{authorsseventyfive}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesseventysix}"</p>
        <p><small>--{authorsseventysix}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesseventyseven}"</p>
        <p><small>--{authorsseventyseven}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesseventyeight}"</p>
        <p><small>--{authorsseventyeight}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesseventynine}"</p>
        <p><small>--{authorsseventynine}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quoteseighty}"</p>
        <p><small>--{authorseighty}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quoteseightyone}"</p>
        <p><small>--{authorseightyone}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quoteseightytwo}"</p>
        <p><small>--{authorseightytwo}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quoteseightythree}"</p>
        <p><small>--{authorseightythree}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quoteseightyfour}"</p>
        <p><small>--{authorseightyfour}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quoteseightyfive}"</p>
        <p><small>--{authorseightyfive}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quoteseightysix}"</p>
        <p><small>--{authorseightysix}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quoteseightyseven}"</p>
        <p><small>--{authorseightyseven}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quoteseightyeight}"</p>
        <p><small>--{authorseightyeight}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quoteseightynine}"</p>
        <p><small>--{authorseightynine}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesninety}"</p>
        <p><small>--{authorsninety}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesninetyone}"</p>
        <p><small>--{authorsninetyone}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesninetytwo}"</p>
        <p><small>--{authorsninetytwo}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesninetythree}"</p>
        <p><small>--{authorsninetythree}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesninetyfour}"</p>
        <p><small>--{authorsninetyfour}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesninetyfive}"</p>
        <p><small>--{authorsninetyfive}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesninetysix}"</p>
        <p><small>--{authorsninetysix}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesninetyseven}"</p>
        <p><small>--{authorsninetyseven}</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesninetyeight}"</p>
        <p><small>--{authorsninetyeight}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesninetynine}"</p>
        <p><small>--{authorsninetynine}</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"{quotesonehundred}"</p>
        <p><small>--{authorsonehundred}</small></p>
      </div>
      </Col>
      </Row>
      </Container>
      </div>
  );
};

export default MainQuoteList;