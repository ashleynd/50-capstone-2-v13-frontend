import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CommunityQuote.css";

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
          <Link to="/">Go back</Link>
        </p>
        </button>
      </div>
    );
  }
}

export default CommunityQuote;

