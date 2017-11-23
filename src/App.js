import React, { Component } from 'react';
import './app.css';

class QuoteDashboard extends Component {
  state = {
    quote: ""
  }
  render() {
    return (
    <div className="wrapper">
      <div className="dashBoard">
        <div className="contentGrid">
          <header className="header">
            <h1>Random Quote Generator </h1>
          </header>
          <QuoteContent  />
          <ButtonContainer />
        </div>
      </div>
    </div>
    );
  }
}

class QuoteContent extends Component {
  render() {
    return (
    <div className="quote" >
      <p>
        People buy things they don't need with money they don't have to impress people that don't care.
      </p>
    </div>
    )
  }
}

class ButtonContainer extends Component {
  render() {
    return (
      <div className="newQuote">
        <button className="btn">New Quote</button>
        <TweetButton />
      </div>
    );
  }
}


class TweetButton extends Component {
  render() {
    return (
      <div>
        <button className="btn"> Tweet This Quote </button>
      </div>
    );
  }
}



export default QuoteDashboard;
