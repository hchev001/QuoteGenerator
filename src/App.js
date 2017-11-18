import React, { Component } from 'react';

class QuoteDashboard extends Component {
  currentQuote = 'People buy thing they dont need with money they dont have to impress people they dont care';
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <QuoteContent  />
        <Button />
        <TweetButton />
      </div>
    );
  }
}

class QuoteContent extends Component {
  render() {
    return (
    <div>
      People buy things they don't need with money they don't have to impress people that don't care.
    </div>
    )
  }
}

class Button extends Component {
  render() {
    return(
      <button> New Quote </button>
    );
  }
}

class TweetButton extends Component {
  render() {
    return (
      <button> Tweet This Quote </button>
    );
  }
}



export default QuoteDashboard;
