import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

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
      People buy things they don't need with money they don't have to impress people that don't care.
    </div>
    )
  }
}

class ButtonContainer extends Component {
  render() {
    return (
      <div>
        <Button>New Quote</Button>
        <TweetButton />
      </div>
    );
  }
}


class TweetButton extends Component {
  render() {
    return (
      <Button> Tweet This Quote </Button>
    );
  }
}



export default QuoteDashboard;
