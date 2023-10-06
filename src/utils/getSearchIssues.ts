import axios from 'axios';

const baseURL = 'https://api.github.com/search/issues'

export const getSearchIssues = async (q: string) => {
  const response = await axios({
    method: 'GET',
    url: baseURL,
    params: {
      q: `${q} repo:kunzeleric/react-github-blog`
    }
  })

  return response;
}