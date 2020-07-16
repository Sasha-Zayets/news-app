import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  headers: {
    'X-Api-Key': 'd38891e5f6fc4ec2885615900859eb4a'
  }
});

export default instance;
