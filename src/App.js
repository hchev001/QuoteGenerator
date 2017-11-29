import React, { Component } from 'react';
import { getQuote } from './services/index';
import './app.css';


class QuoteDashboard extends Component {

  constructor(props){
    super(props);

    this.handleNewQuoteOnClick = this.handleNewQuoteOnClick.bind(this);
    this.getNewQuote = this.getNewQuote.bind(this);

    this.state = {
      quote: "",
      author: "",
    }
  }

  componentDidMount() {
    this.getNewQuote();
  }
  handleNewQuoteOnClick = () => {
    this.getNewQuote();
  }

  getNewQuote = () => {
    getQuote( (response) => {
      this.setState(() => {
        return {
        quote: response.quote,
        author: response.author
        };
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
            quote={this.state.quote}
            author={this.state.author} />
          <TwitterButton
            quote={this.state.quote} />
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

const QuoteContent = (props) => {
  return (
    <div className="quote">
      <p>{props.quote} <br />-{props.author}</p>
    </div>
  );
}


class Button extends Component {
  render() {
    return (
      <div className={this.props.btnType}>
        <button className="btn newQuote" onClick={this.props.handleOnClick}>
          {this.props.label}
        </button>
      </div>
    );
  }
}

class TwitterButton extends Component {
  constructor(props){
    super(props);

    this.encodeQuote = this.encodedQuote.bind(this);
  }

  encodedQuote(){
    return encodeURI(this.props.quote);
  }

  render() {
    const uri = "https://twitter.com/intent/tweet?text=" + this.encodedQuote();
    return (
      <a className="twitter-share-button btn tweet" href={uri}> Tweet</a>
    );
  }
}


export default QuoteDashboard;
