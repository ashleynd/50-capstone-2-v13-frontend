import React, { Component } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import CommunityQuoteList from "../community/CommunityQuoteList";
import NewCommunityQuoteForm from "../community/NewCommunityQuoteForm";
import CommunityQuote from "../community/CommunityQuote";


class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      communityquotes: JSON.parse(localStorage.getItem("communityquotes")) || {
        "Don't cry because it's over. Smile because it happened. -Dr. Seuss": "#FF0000",
        "If anything is worth doing, do it with all your heart. -Buddha": "#00FF00",
        "In the end, it's not the years in your life that count. It's the life in your years. --Abraham Lincoln": "#0000FF"
        // red: "#FF0000",
        // blue: "#00FF00",
        // green: "#0000FF"
      }
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newCommunityQuote) {
    this.setState(prevState => ({
      communityquotes: { ...newCommunityQuote, ...prevState.communityquotes }
    }), () => {
      // third param to setState is fn-to-run-when-done
      localStorage.setItem("communityquotes", JSON.stringify(this.state.communityquotes))
    });
  }

  render() {
    const communityquoteListWithCommunityQuotes = () => <CommunityQuoteList communityquotes={this.state.communityquotes} />;

    const newCommunityQuoteWithHandler = props => (
      <NewCommunityQuoteForm addCommunityQuote={this.handleAdd} {...props} />
    );

    const currentCommunityQuote = props => {
      const communityquoteName = props.match.params.communityquote;
      const hex = this.state.communityquotes[communityquoteName];
      return <CommunityQuote {...props} hex={hex} />;
    };

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/communityquotes" render={communityquoteListWithCommunityQuotes} />
          <Route exact path="/communityquotes/new" render={newCommunityQuoteWithHandler} />
          <Route path="/communityquotes/:communityquote" render={currentCommunityQuote} />
          <Redirect to="/communityquotes" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
