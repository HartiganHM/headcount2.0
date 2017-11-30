import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let value = event.target.value;
        this.props.filterCards(value);
        this.setState({value})
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    placeholder='Search for a district'
                    value={this.state.value}
                    onChange={this.handleChange}/>
                <button>Search</button>
            </div>
        )
    }
}

export default Search;
