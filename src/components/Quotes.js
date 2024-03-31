import React, { Component } from "react";
import quotesData from "./quotes.json";

class Quotes extends Component {
  constructor() {
    super();
    this.state = { quote: {}, quotes: [] };
    this.fetchQuotes = this.fetchQuotes.bind(this);
    this.hideQuotes = this.hideQuotes.bind(this);
  }

  componentDidMount() {
    // Display a random quote initially
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    this.setState({ quote: quotesData[randomIndex] });
  }

  fetchQuotes = () => {
    // Fetch all quotes
    this.setState({ quotes: quotesData });
  };

  hideQuotes = () => {
    // Hide all quotes
    this.setState({ quotes: [] });
  };

  render() {
    return (
      
      <div>
        <h2>Today's Quote</h2>
        <p>{this.state.quote.title}</p>
        <hr />
        {this.state.quotes.length > 0 ? (
          <div>
            <h3>This Is All Available Quotes</h3>
            <button className="btn" onClick={this.hideQuotes}>
              Hide Quotes
            </button>
            {this.state.quotes.map((quote) => {
              return <p key={quote.id}>{quote.title}</p>;
            })}
          </div>
        ) : (
          <div>
            <h3>Do You Want More Quotes?</h3>
            <button className="btn" onClick={this.fetchQuotes}>
              Show Quotes
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Quotes;
