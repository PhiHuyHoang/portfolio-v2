import React from 'react';
import * as CONFIG from '../utils/Constant';

export default class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            preferlanguage : 0,
            framework : 0,
            year : 0,
            sal : 0,
            tool : 0,
            per : "",
            showResults: false
        };
        this.showItem = this.showItem.bind(this);
    }

    showItem() {
        if(this.state.sal <= 0 || this.state.year > 2)
        {
            this.setState({per : CONFIG.denied});
        }
        else if(this.state.sal > 100000) {
            this.setState({per: "Say no more, bro. Where can I sign?"})
        }
        else {
            if(this.state.framework + this.state.preferlanguage + this.state.tool >=3)
            {
                this.setState({per : CONFIG.accept});
            }
            else {
                this.setState({per : CONFIG.denied});
            }
        }
        this.setState({showResults : true});
    }

    onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

    render() {
    return (
        <div class ="artist__cal">
                <label htmlFor="preferlanguage">How many programming languages did I match your search?</label>
              <input
                id="preferlanguage"
                type="number"
                value={this.state.preferlanguage}
                onChange={this.onChange.bind(this)}
              />
              <label htmlFor="framework">How many frameworks did I match your needed?</label>
              <input
                id="framework"
                type="number"
                value={this.state.framework}
                onChange={this.onChange.bind(this)}
              />
              <label htmlFor="year">How many years of experiences do you require?</label>
              <input
                id="year"
                type="number"
                value={this.state.year}
                onChange={this.onChange.bind(this)}
              />
              <label htmlFor="tool">How many tools set did I match your needed?</label>
              <input
                id="tool"
                type="number"
                value={this.state.tool}
                onChange={this.onChange.bind(this)}
              />
              <label htmlFor="sal">How much are you willing to pay me per month? (In Euro)</label>
              <input
                id="sal"
                type="number"
                value={this.state.sal}
                onChange={this.onChange.bind(this)}
              />

            
        <button class="show-more button-light" onClick={this.showItem}>Let see if we match</button>
        { this.state.showResults ? <p>{this.state.per}</p> : null }
        </div>
        );
    }
}