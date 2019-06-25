import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://myburger-f198a.firebaseio.com/'

});

export default instance;