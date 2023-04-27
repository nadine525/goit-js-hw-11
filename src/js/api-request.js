import axios from 'axios';

const per_page = 40;
let allPages = 0;

//запит (поверне проміс)
async function dataRequest(searchQuery, page) {
  const API_KEY = '35725136-aa5e091c3da43d100e1dd6165';

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: per_page,
    page: page,
  });

  const response = await axios.get(`https://pixabay.com/api/?${searchParams}`);
  console.log(response);
  allPages = response.data.totalHits / per_page;

  return response;
}

export { dataRequest, allPages };
