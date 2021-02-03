import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID CBNFvA9yhdztBp8GA95cDL05jQOUVt9wXoHUjFep1xs'
  }
});
