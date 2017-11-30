import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <input type='text' placeholder='Search for a district'/>
                <button>Search</button>
            </div>
        )
    }
}

export default Search;
