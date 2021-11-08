import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CommunityQuote.css";

const linkStyle = {
  padding: 5,
  textDecoration: "none",
  color: 'white',
  size: 3.5,
};
class CommunityQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {chars_left: 140, max_chars: 140};
    if (!props.hex) {
      props.history.push("/communityquotes");
    }
  }

  render() {
    return (
      <div>
        <div className="thoughtBubble">
        <p className="quotetext">{this.props.match.params.communityquote}</p>
        </div>
        <button className="goback">
        <p className="button-text">
          <Link to="/" style={linkStyle}>Go back</Link>
        </p>
        </button>
      </div>
    );
  }
}

export default CommunityQuote;

