import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY_API = process.env.REACT_APP_FIREBASE_API_KEY;

async function searchImage(query, page) {
  return await axios.get(
    `?q=${query}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
  );
}

const api = {
  searchImage,
};

export default api;
