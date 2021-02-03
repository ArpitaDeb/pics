import React from 'react';
import ReactDOM, { render } from 'react-dom';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },   
        });
        this.setState({ images: response.data.results })
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
};
export default App;
{/*async method 
async onSearchSubmit(term) {
        const response = await axios
            .get('https://api.unsplash.com/search/photos', {
                params: {
                    query: term
                },
                headers: {
                    Authorization: 'Client-ID CBNFvA9yhdztBp8GA95cDL05jQOUVt9wXoHUjFep1xs'
                }
            });
            console.log(this);
        console.log(response.data.results);
        this.setState({ images: response.data.results })
    }
*/}
{/* Promise method
    onSearchSubmit(term) {
        axios
            .get('https://api.unsplash.com/search/photos', {
                params: {
                    query: term
                },
                headers: {
                    Authorization: 'Client-ID CBNFvA9yhdztBp8GA95cDL05jQOUVt9wXoHUjFep1xs'
                }
            }).then((response) => {
                console.log(response.data.results);
    });
*/}