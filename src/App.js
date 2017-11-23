import React, { Component } from 'react';
import { getQuote } from './services/index';
import './app.css';

class QuoteDashboard extends Component {
  state = {
    quote: "",
    author: "",
  }

  componentDidMount() {
    this.getNewQuote();
  }

  handleNewQuoteOnClick = () => {
    this.getNewQuote();
  }

  getNewQuote = () => {
    getQuote( (response) => {
      this.setState({
        quote: response.quote,
        author: response.author
      });
    });
  };

  render() {
    return (
    <div className="wrapper">
      <div className="dashBoard">
        <div className="contentGrid">
          <header>
            <h1>Random Quote Generator </h1>
          </header>
          <QuoteContent 
            quote={this.state.quote} />
          <Button
            btnType="tweet"
            handleOnClick={this.handleNewQuoteOnClick}
            label="Tweet" />
          <Button 
            btnType="newQuote"
            handleOnClick={this.handleNewQuoteOnClick}
            label="New Quote"/>         
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
      <p>{this.props.quote}</p>
    </div>
    )
  }
}


class Button extends Component {
  render() {
    return (
      <div className={this.props.btnType}>
        <button className="btn" onClick={this.props.handleOnClick}>
          {this.props.label}
        </button>
      </div>
    );
  }
}


export default QuoteDashboard;
