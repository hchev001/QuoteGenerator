import React, { Component } from 'react';

class QuoteDashboard extends Component {
  state = {
    quote: ""
  }
  render() {
    return (
      <div className="App">
          <header>
            <h1>Random Quote Generator </h1>
          </header>
          <QuoteContent  />
          <ButtonContainer />
      </div>
    );
  }
}

class QuoteContent extends Component {
  render() {
    return (
    <div>
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
      <div>
        <button>New Quote</button>
        <TweetButton />
      </div>
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
