import React from "react";
import useFetch from "../hooks/useFetch";
import './RandomQuote.css';

const RandomQuote = () =>  {
  const data = useFetch("https://zenquotes.io/api/random", {
    mode: "no-cors",
  });
  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :(</div>
  }

  // const randomQuoteData = data.response[0];
  const randomQuote = data.response[0].q;
  const randomQuoteAuthor = data.response[0].a;


  
  return (
    <div className="App">
        <div className="thoughtBubble">
            <p className="randomquote">"{randomQuote}"</p>
            <p className="randomauthor">--{randomQuoteAuthor}</p>
        </div>
      </div>
  );
};

export default RandomQuote;