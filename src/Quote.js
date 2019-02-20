import React, { Component } from 'react'
import './Quote.css'


class Quote extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            quotes: [
                {quote: 'first quote', author: 'me', color: '#FF5733' },
                {quote: 'second quote', author: 'me again', color: '#FFB233'},
                {quote: 'third quote', author: 'me one', color: '#282C34'},
                {quote: 'fourth quote', author: 'me original', color: '#FFB233'}
            ],
            currentQuoteIndex: 0
        }

        this.onNewQuote = this.onNewQuote.bind(this);
    }

    onNewQuote(){
        let index = this.state.currentQuoteIndex;
        if (index === this.state.quotes.length - 1){
            index = -1;
        }

        this.setState(state => {
            return {
                quotes: state.quotes,
                currentQuoteIndex: index + 1,
            }
        });
    }

    render() {

        const dynamicBackgroundColorStyle = {
            backgroundColor: this.state.quotes[this.state.currentQuoteIndex].color
        }       
        
        const dynamicColorStyle = {
            color: this.state.quotes[this.state.currentQuoteIndex].color
        }

        return (
            <div id='wrapper' style={dynamicBackgroundColorStyle}>
                <div id='quote-box'>
                    <div id='text' style={dynamicColorStyle}>
                        "{this.state.quotes[this.state.currentQuoteIndex].quote}"
                    </div>
                    <div id='author' style={dynamicColorStyle}>
                        - {this.state.quotes[this.state.currentQuoteIndex].author}
                    </div>
                    <div id='options'>
                        <a className="option" id='facebook-quote' style={dynamicBackgroundColorStyle}>
                            <i className='fa fa-facebook'></i>
                        </a>
                        <a className="option" id='tweet-quote' style={dynamicBackgroundColorStyle} target='_blank'
                        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=saadsaifse&text=${encodeURI(this.state.quotes[this.state.currentQuoteIndex].quote + '. ' + this.state.quotes[this.state.currentQuoteIndex].author)}`}>
                            <i className='fa fa-twitter'></i>
                        </a>
                        <button style={dynamicBackgroundColorStyle} className="option" id = 'new-quote' onClick={this.onNewQuote}>New quote</button>
                    </div>
                </div>
                <div>
                    <label style = {{color: '#FFFFFF', fontSize: 20}}>by </label>
                    <a
                    className="app-link"
                    href="https://twitter.com/saadsaifse"
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