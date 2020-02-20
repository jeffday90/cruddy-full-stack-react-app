import axios from 'axios';
import youtubeAPIkey from './youtubeAPIkey';

const searchYoutube = (query, callback) => {
  axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&type=video&videoEmbeddable=true&key=${youtubeAPIkey}`, (data) => callback(data.items));
};

export default searchYoutube;
