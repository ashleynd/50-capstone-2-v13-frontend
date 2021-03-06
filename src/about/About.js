import React from "react";
import './About.css';
import headshot from './headshot.png';

const About = () => {

  return (
    <div className="App">
        <h1 className="about-title">
        <span role="img" aria-label="tech">ð©ð»âð»</span>About<img src={headshot} alt="headshot" className="headshot" />
        </h1>
        <div className="thoughtBubble-about">
        <div className="about-paragraph">
        <p>
            Quotable is my final of two capstone projects I developed with Springboard's Software Engineering Bootcamp. 
            Built with PostgreSQL, Express.js, React, Node.js and deployed with Heroku, it's meant to browse famous quotes, add favorite quotes, search for certain quotes and authors, 
            and even post your own quotes.
        </p>
        <p>
            Quotable's API:
            {/* <form action="https://goquotes.docs.apiary.io/#" target="_blank">
                <input className="about-btn" type="submit" value="Go Quotes API â¡ï¸" />
            </form> */}
            {/* <form action="https://zenquotes.io/" target="_blank">
                <input className="about-btn" type="submit" value="Zen Quotes API â¡ï¸" />
            </form> */}
            {/* <form action="https://opensourcelibs.com/lib/quotable#list-quotes" target="_blank">
                <input className="about-btn" type="submit" value="Quotable API â¡ï¸" />
            </form> */}
            <form action="https://theysaidso.com/#" target="_blank">
                <input className="about-btn" type="submit" value="They Said SoÂ® API â¡ï¸" />
            </form>
        </p>
        </div>
        </div>
        <div className="thoughtBubble-viewmore">
        <h3 className="about-me">
        View more about me:
        </h3>
        <form action="https://www.linkedin.com/in/ashleyndragan/" target="_blank">
          <input className="about-btn" type="submit" value="LinkedIn â¡ï¸" />
        </form>
        <form action="http://picslink.herokuapp.com/" target="_blank">
          <input className="about-btn" type="submit" value="My first Capstone â¡ï¸" />
        </form>
        <form action="https://www.springboard.com/courses/software-engineering-career-track/" target="_blank">
          <input className="about-btn" type="submit" value="Springboard â¡ï¸" />
        </form>
      </div>
        </div>
  );
};

export default About;
