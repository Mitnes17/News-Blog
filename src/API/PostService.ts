import axios from 'axios';

const PostService = {
  async getAll(page: number, limit: number) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page,
      },
    });

    return response;
  },

  async getById(id: string) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return response;
  },

  async getCommentsById(id: string) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

    return response;
  },
};

export default PostService;
