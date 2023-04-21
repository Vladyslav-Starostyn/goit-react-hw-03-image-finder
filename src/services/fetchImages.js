import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const key = '33817651-997e7e2cbe1c3994ebc4bd75c';

export const fetchImages = async (query, page, setStatus) => {
  try {
    const response = await axios.get(
      `?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    );
    if (response.data.hits.length < 1) {
      setStatus('rejected');
    }
    return response.data;
  } catch (error) {
    console.log(error.massege);
  }
};
