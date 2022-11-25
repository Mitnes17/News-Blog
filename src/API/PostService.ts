import axios from 'axios';

export default async function PostService(page: number, limit: number) {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: {
      _limit: limit,
      _page: page,
    },
  });
  return response;
}
