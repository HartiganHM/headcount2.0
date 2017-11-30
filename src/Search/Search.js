import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    handleChange() {
        console.log('butt')
    }

    render({ filterCards }) {
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
