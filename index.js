import React, { Component } from 'react'
import './State.css';

class STATE extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
        // Normal function korle Count er time a bind use korte hobe
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }

    increment = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
    decrement = () => {
        this.setState({
            count : this.state.count - 1
        })
    }
    

    render() {
        const {count} = this.state
        return (
            <div>
                <h1>Count : {count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement} disabled={count ===0 ? true : false}>-</button>
            </div>
        )
    }
}

export default STATE;
