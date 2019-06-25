import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://myburger-f19a.firebaseio.com/'

});

export default instance;