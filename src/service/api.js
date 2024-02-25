import axios from 'axios';

const KEY = '40066874-c684fea7be1806c3f735d28e1';
axios.defaults.baseURL = 'https://pixabay.com/api';
const PER_PAGE = 12;

export function fetchImages(request, page) {
  const data = axios.get(
    `?q=${request}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
  );

  return data;
}
