import React from "react";
import useFetch from "../hooks/useFetch";
import '../RandomQuote/RandomQuote.css';
import LoadingSpinner from "../common/LoadingSpinner";
// import moment from 'moment';

const QuoteOfTheDay = () => {
  const data = useFetch("https://quotes.rest/qod");
  if (data.isLoading) {
    return <div><LoadingSpinner /></div>;
    // return <div>Loading...</div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :(</div>
    }
    
    const quote = data.response;

    
    const title = quote.contents.quotes[0].title;
    const quoteOfTheDay = quote.contents.quotes[0].quote;
    const author = quote.contents.quotes[0].author;
    const date = quote.contents.quotes[0].date;

    const source = quote.contents.quotes[0].permalink;
    
    // var x = changeDate(date);
    // function changeDate(x){
    //   let currentDate = new Date(date);
    //   var fd = currentDate.toDateString();
    //   return fd;
    // }
    
  
  // https://momentjs.com/

  return (
    <div className="App">
          <h1><span role="img" aria-label="calendar">📅</span>{title}</h1>
          <h4>for {date}</h4>
          {/* <h4>for {x}</h4> */}
        <div className="thoughtBubble">
            <p>"{quoteOfTheDay}"</p>
            <p>by {author}</p>
        </div>
        <form action={source} target="_blank">
          <input className="source-btn" type="submit" value="read more about this quote at They Said So® ➡️" />
        </form>
      </div>
  );
};

export default QuoteOfTheDay;


