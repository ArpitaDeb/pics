import React from 'react';
import ReactDOM, { render } from 'react-dom';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID CBNFvA9yhdztBp8GA95cDL05jQOUVt9wXoHUjFep1xs'
            }
        }).then((response) => {
            console.log(response);
        });
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
};
export default App;