import axios from "axios"

axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY_API = "28422237-ad1e99f44820901c4fb6da11b";

async function fetchImage ( fetchValue ) {
    return await axios.get(`?q=${fetchValue}&page=1&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`)
}

const api = {
    fetchImage,
};

export default api;