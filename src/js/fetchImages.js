import axios from 'axios';

const PARAM =
    'per_page=40&image_type=photo&orientation=horizontal&safesearch=true';
const API_KEY = '28388754-d7a8c797da0312bb5ddb1e0ef';

axios.defaults.baseURL = 'https://pixabay.com/api';

async function fetchImages(query, page = 1) {
    const name = `/?key=${API_KEY}&q=${query}&page=${page}&${PARAM}`;
    const response = await axios.get(name);
    // if (!response.ok) {
    //     throw new Error(response.status);
    // }
    return response;
}

export default fetchImages;
