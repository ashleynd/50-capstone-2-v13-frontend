import React, { Component } from "react";
// import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
// import UserContext from "../auth/UserContext";
import "./CommunityQuoteList.css";

class CommunityQuoteList extends Component {
  render() {
    // const { currentUser } = useContext(UserContext);
    const communityquoteLinks = Object.keys(this.props.communityquotes).map(communityquoteName => (
      <div key={communityquoteName} className="quotecard" >
        {/* {currentUser.first_name || currentUser.username} */}
        <Link to={`/communityquotes/${communityquoteName}`}>"{communityquoteName}"</Link>
      </div>
    ));

    return (
      <div className="CommunityQuoteList">
        <header>
          <h1 className="CommunityQuoteList-title">Community Quotes</h1>
          <button className="add-btn">
            <Link to="/communityquotes/new" style={{ textDecoration: 'none', communityquote: 'black', padding: '20px' }}>Add a quote below.</Link>
          </button>
        </header>
        <div className="CommunityQuoteList-intro">
          <ul style={{ textDecoration: 'none', communityquote: 'black' }}>{communityquoteLinks}</ul>
        </div>
      </div>
    );
  }
}

export default CommunityQuoteList;
