import React, { Component } from 'react'
import './Quote.css'


class Quote extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            quotes: [
                {quote: 'first quote', author: 'me', color: '0xFFFFFF'},
                {quote: 'second quote', author: 'me', color: '0x000000'},
                {quote: 'third quote', author: 'me', color: '0xFFFFFF'},
                {quote: 'fourth quote', author: 'me', color: '0xFFFFFF'}
            ],
            currentQuoteIndex: 0
        }

        this.onNewQuote = this.onNewQuote.bind(this);
    }

    onNewQuote(){
        console.log('in new quote click');
        this.setState(state => {
            return {
                quotes: state.quotes,
                currentQuoteIndex: state.currentQuoteIndex + 1,
            }
        });
    }

    onTweetQuote(){

    }

    onFacebookQuote(){

    }

    componentDidUpdate(){
    }

    render() {

        const wrapperStyle = {
            backgroundColor: this.state.quotes[this.state.currentQuoteIndex].color
        }

        return (
            <div id='wrapper' style={wrapperStyle}>
            <div id='quote-box'>
                <div id='text'>
                    "{this.state.quotes[this.state.currentQuoteIndex].quote}"
                </div>
                <div id='author'>
                    - {this.state.quotes[this.state.currentQuoteIndex].author}
                </div>
                <div id='options'>
                    <a className="option" id='facebook-quote'>
                        <i className='fa fa-facebook'></i>
                    </a>
                    <a className="option" id='tweet-quote'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    <button className="option" id = 'new-quote' onClick={this.onNewQuote}>New quote</button>
                </div>
            </div>
            <div>
                    <label style = {{color: '#61dafb'}}>by </label>
                    <a
                    className="app-link"
                    href="https://saadsaifse.wordpress.come"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    saadsaifse
                    </a>
                </div>
            </div>
        );
    }
}

export default Quote;