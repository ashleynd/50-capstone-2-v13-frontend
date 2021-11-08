import React, { Component } from "react";
import "./NewCommunityQuoteForm.css";

class NewCommunityQuoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hex: "#ffffff"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addCommunityQuote({ [this.state.name]: this.state.hex });
    this.props.history.push("/communityquotes");
  }

  render() {
    return (
      <div className="NewCommunityQuote">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">New Quote</label>
            <br/>
            <input className="input-field"
              name="name"
              id="name"
              placeholder="Enter quote and author here"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <input type="Submit" value="Add quote" readOnly />
        </form>
      </div>
      
    );
  }
}


export default NewCommunityQuoteForm;
