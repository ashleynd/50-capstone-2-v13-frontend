// import React, { useState, useEffect } from "react";
import React from "react";
import useFetch from "../hooks/useFetch";
import { Container, Row, Col } from "reactstrap";
// import LikeButton from "./LikeButton";
// import QuotableApi from "../api/api";
// import QuoteCardList from "../quotes/QuoteCardList";
import LoadingSpinner from "../common/LoadingSpinner";
import './MainQuoteList.css';

const MainQuoteList = ({ id, title, authorName }) => {
  // const data = useFetch("https://goquotes-api.herokuapp.com/api/v1/random?count=101");
  const data = useFetch("https://quotable.io/quotes?page=1");
  if (data.isLoading) {
    // return <div>Loading...</div>;
    return <div className="loading"><LoadingSpinner /></div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :(</div>
    }

  // const quote = data.response;
  // console.log(quote)
  // console.log(quote.results[0].content);
  // console.log(quote.results[0].author);
  // console.log(quote.results[1].content);
  // console.log(quote.results[1].author);

  
  // console.log(quote.quotes)
  // const quotezero = quote.results[0].content;
  // const authorzero = quote.results[0].author;
  // const quoteone = quote.results[1].content;
  // const authorone = quote.results[1].author;
  // const quotetwo = quote.results[2].content;
  // const authortwo = quote.results[2].author;
  // const quotethree = quote.results[3].content;
  // const authorthree = quote.results[3].author;
  // const quotefour = quote.results[4].content;
  // const authorfour = quote.results[4].author;
  // const quotefive = quote.results[5].content;
  // const authorfive = quote.results[5].author;
  // const quotesix = quote.results[6].content;
  // const authorsix = quote.results[6].author;
  // const quoteseven = quote.results[7].content;
  // const authorseven = quote.results[7].author;
  // const quoteeight = quote.results[8].content;
  // const authoreight = quote.results[8].author;
  // const quotenine = quote.results[9].content;
  // const authornine = quote.results[9].author;
  // const quoteten = quote.results[10].content;
  // const authorten = quote.results[10].author;
  // const quoteeleven = quote.results[11].content;
  // const authoreleven = quote.results[11].author;
  // const quotetwelve = quote.results[12].content;
  // const authortwelve = quote.results[12].author;
  // const quotethirteen = quote.results[13].content;
  // const authorthirteen = quote.results[13].author;
  // const quotefourteen = quote.results[14].content;
  // const authorfourteen = quote.results[14].author;
  // const quotefifteen = quote.results[15].content;
  // const authorfifteen = quote.results[15].author;
  // const quotesixteen = quote.results[16].content;
  // const authorsixteen = quote.results[16].author;
  // const quoteseventeen = quote.results[17].content;
  // const authorseventeen = quote.results[17].author;
  // const quoteeighteen = quote.results[18].content;
  // const authoreighteen = quote.results[18].author;
  // const quotesnineteen = quote.results[19].content;
  // const authorsnineteen = quote.results[19].author;


  
  // return (
  //   // <div className="card-list" style={{ display: "flex", flexWrap: "wrap" }}>
  //   <div className="card-list">
  //     <Container>
  //     <Row>
  //       <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quotezero}"</p>
  //       <p><small>--{authorzero}</small></p>
  //     </div>
  //       </Col>
  //       <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quoteone}"</p>
  //       <p><small>--{authorone}</small></p>
  //     </div>
  //     </Col>
  //       <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quotetwo}"</p>
  //       <p><small>--{authortwo}</small></p>
  //     </div>
  //     </Col>
  //     </Row>
  //     <Row>
  //       <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quotethree}"</p>
  //       <p><small>--{authorthree}</small></p>
  //     </div>
  //     </Col>
  //       <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quotefour}"</p>
  //       <p><small>--{authorfour}</small></p>
  //     </div>
  //     </Col>
  //       <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quotefive}"</p>
  //       <p><small>--{authorfive}</small></p>
  //     </div>
  //     </Col>
  //     </Row>
  //     <Row>
  //       <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quotesix}"</p>
  //       <p><small>--{authorsix}</small></p>
  //     </div>
  //     </Col>
  //       <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quoteseven}"</p>
  //       <p><small>--{authorseven}</small></p>
  //     </div>
  //     </Col>
  //       <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quoteeight}"</p>
  //       <p><small>--{authoreight}</small></p>
  //     </div>
  //     </Col>
  //     </Row>
  //     <Row>
  //       <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quotenine}"</p>
  //       <p><small>--{authornine}</small></p>
  //     </div>
  //     </Col>
  //       <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quoteten}"</p>
  //       <p><small>--{authorten}</small></p>
  //     </div>
  //     </Col>
  //       <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quoteeleven}"</p>
  //       <p><small>--{authoreleven}</small></p>
  //     </div>
  //     </Col>
  //     </Row>
  //     <Row>
  //       <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quotetwelve}"</p>
  //       <p><small>--{authortwelve}</small></p>
  //     </div>
  //     </Col>
  //       <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quotethirteen}"</p>
  //       <p><small>--{authorthirteen}</small></p>
  //     </div>
  //     </Col>
  //       <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quotefourteen}"</p>
  //       <p><small>--{authorfourteen}</small></p>
  //     </div>
  //     </Col>
  //     </Row>
  //     <Row>
  //       <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quotefifteen}"</p>
  //       <p><small>--{authorfifteen}</small></p>
  //     </div>
  //     </Col>
  //       <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quotesixteen}"</p>
  //       <p><small>--{authorsixteen}</small></p>
  //     </div>
  //     </Col>
  //       <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quoteseventeen}"</p>
  //       <p><small>--{authorseventeen}</small></p>
  //     </div>
  //     </Col>
  //     </Row>
  //     <Row>
  //       <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quoteeighteen}"</p>
  //       <p><small>--{authoreighteen}</small></p>
  //     </div>
  //     </Col>
  //       {/* <Col>
  //     <div className="thoughtBubble2">
  //       <p>"{quotesnineteen}"</p>
  //       <p><small>--{authorsnineteen}</small></p>
  //     </div>
  //     </Col> */}
  //     </Row>
  //     </Container>
  //     </div>
  // );

  return (
    // <div className="card-list" style={{ display: "flex", flexWrap: "wrap" }}>
    <div className="card-list">
      <Container>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"There is still a lot to learn and there is always great stuff out there. Even mistakes can be wonderful."</p>
        <p><small>--Robin Williams</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"I think it is possible for ordinary people to choose to be extraordinary."</p>
        <p><small>--Elon Musk</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Life is pretty simple: You do some stuff. Most fails. Some works. You do more of what works."</p>
        <p><small>--Leonardo Da Vinci</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"Be yourself; everyone else is already taken."</p>
        <p><small>--Oscar Wilde</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"If I had asked people what they wanted, they would have said faster horses."</p>
        <p><small>--Henry Ford</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"The best way to predict your future is to create it."</p>
        <p><small>--Abraham Lincoln</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"Mistakes are always forgivable, if one has the courage to admit them."</p>
        <p><small>--Bruce Lee</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"If a man hasn't discovered something he will die for, he isn''t fit to live."</p>
        <p><small>--Martin Luther King Jr.</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"I don't think of all the misery, but of the beauty that still remains."</p>
        <p><small>--Anne Frank</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"Courage is found in unlikely places."</p>
        <p><small>--J.R.R. Tolkien</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Pride costs us more than hunger, thirst, and cold."</p>
        <p><small>--Thomas Jefferson</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Never make someone a priority when all you are to them is an option."</p>
        <p><small>--Maya Angelou</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"And I like large parties. They’re so intimate. At small parties there isn’t any privacy."</p>
        <p><small>--F. Scott Fitzgerald</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Don't worry about a thing, every little thing is gonna be alright."</p>
        <p><small>--Bob Marley</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"No matter what anybody tells you, words and ideas can change the world."</p>
        <p><small>--Robin Williams</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"When I thought I couldn’t go on, I forced myself to keep going. My success is based on persistence, not luck."</p>
        <p><small>--Estée Lauder</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Count your age by friends, not years. Count your life by smiles, not tears."</p>
        <p><small>--John Lennon</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"If we really want to love, we must learn how to forgive."</p>
        <p><small>--Mother Teresa</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"Everyone has oceans to fly, if they have the heart to do it. Is it reckless? Maybe. But what do dreams know of boundaries?"</p>
        <p><small>--Amelia Earhart</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"It is better to light a candle than curse the darkness."</p>
        <p><small>--Eleanor Roosevelt</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"When angry, count ten, before you speak; if very angry, a hundred."</p>
        <p><small>--Thomas Jefferson</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"Life’s too short to hang out with people who aren’t resourceful."</p>
        <p><small>--Jeff Bezos</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"As you grow older you will discover that you have two hands. One for helping yourself, the other for helping others."</p>
        <p><small>--Audrey Hepburn</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Laughter is America’s most important export."</p>
        <p><small>--Walt Disney</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"You never know when a moment and a few sincere words can have an impact on a life."</p>
        <p><small>--Zig Ziglar</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Vision without execution is just hallucination."</p>
        <p><small>--Henry Ford</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Put blinders on to those things that conspire to hold you back, especially the ones in your own head."</p>
        <p><small>--Meryl Streep</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"No one has ever become poor by giving."</p>
        <p><small>--Anne Frank</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Money and success don''t change people; they merely amplify what is already there."</p>
        <p><small>--Will Smith</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"To build may have to be the slow and laborious task of years. To destroy can be the thoughtless act of a single day."</p>
        <p><small>--Winston Churchill</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"Who you are is always right."</p>
        <p><small>--Ming Dao Deng</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"A question that sometimes drives me hazy — am I or are the others crazy?"</p>
        <p><small>--Albert Einstein</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"If you take responsibility for yourself you will develop a hunger to accomplish your dream."</p>
        <p><small>--Les Brown</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"Love is like the wind, you can''t see it but you can feel it."</p>
        <p><small>--Nicholas Sparks</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Don’t throw stones at your neighbors, if your own windows are glass."</p>
        <p><small>--Benjamin Franklin</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Everything has beauty, but not everyone sees it."</p>
        <p><small>--Confucius</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"The heart wants what it wants. There''s no logic."</p>
        <p><small>--Woody Allen</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"There can be no greater gift than that of giving one''s time and energy to help others without expecting anything in return."</p>
        <p><small>--Nelson Mandela</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"I think everybody should get rich and famous and do everything they ever dreamed of so they can see that it’s not the answer."</p>
        <p><small>--James Carrey</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"If you only knew the magnificence of the 3, 6, and 9, then you would have a key to the universe."</p>
        <p><small>--Nikola Tesla</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"It is better to change an opinion than to persist in a wrong one."</p>
        <p><small>--Socrates</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"If you spend too much time thinking about a thing, you’ll never get it done. Make at least one definite move daily toward your goal."</p>
        <p><small>--Bruce Lee</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"Friendships between women, as any woman will tell you, are built of a thousand small kindnesses... swapped back and forth and over again."</p>
        <p><small>--Michelle Obama</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"One of the only ways to get out of a tight box is to invent your way out."</p>
        <p><small>--Jeff Bezos</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Get busy living or get busy dying."</p>
        <p><small>--Steve Jobs</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"It is better to be alone than in bad company."</p>
        <p><small>--George Washington</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"If you tell the truth, you don''t have to remember anything."</p>
        <p><small>--Mark Twain</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Be clearly aware of the stars and infinity on high. Then life seems almost enchanted after all."</p>
        <p><small>--Vincent Van Gogh</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"Radiate boundless love towards the entire world."</p>
        <p><small>--Buddha</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Saying nothing sometimes says the most."</p>
        <p><small>--Emily Dickinson</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Pleasure in the job puts perfection in the work.'"</p>
        <p><small>--Aristotle</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"Sometimes you just have to throw on a crown and remind them who they’re dealing with."</p>
        <p><small>--Marilyn Monroe</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"A crisis is an opportunity riding the dangerous wind."</p>
        <p><small>--Chinese Proverb</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"There is nothing so stable as change."</p>
        <p><small>--Bob Dylan</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"There are no secrets to success. It is the result of preparation, hard work, and learning from failure."</p>
        <p><small>--Colin Powell</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Football is like life – it requires perseverance, self-denial, hard work, sacrifice, dedication and respect for authority."</p>
        <p><small>--Vince Lombardi</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Listen. I wish I could tell you it gets better. But, it doesn’t get better. You get better."</p>
        <p><small>--Joan Rivers</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"Never settle for the crumbs of life."</p>
        <p><small>--Og Mandino</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Your world is a living expression of how you are using and have used your mind."</p>
        <p><small>--Earl Nightingale</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Well-behaved women seldom make history."</p>
        <p><small>--Laurel Thatcher Ulrich</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"The foolish reject what they see, not what they think; the wise reject what they think, not what they see."</p>
        <p><small>--Huang Po</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Why do you stay in prison when the door is so wide open?"</p>
        <p><small>--Rumi</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"The best way to find yourself is to lose yourself in the service of others."</p>
        <p><small>--Gandhi</small></p>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className="thoughtBubble2">
        <p>"Why live an ordinary life, when you can live an extraordinary one."</p>
        <p><small>--Tony Robbins</small></p>
      </div>
        </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"The only place where success comes before work is in the dictionary."</p>
        <p><small>--Vidal Sassoon</small></p>
      </div>
      </Col>
        <Col>
      <div className="thoughtBubble2">
        <p>"Whatever happens always happens on time."</p>
        <p><small>--Zen Proverb</small></p>
      </div>
      </Col>
      </Row>
      </Container>
      </div>
  );
  
};

export default MainQuoteList;