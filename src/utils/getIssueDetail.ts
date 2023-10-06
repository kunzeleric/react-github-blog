import axios from 'axios';

const baseURL = 'https://api.github.com/repos/kunzeleric/react-github-blog/issues/'

const withBaseURL = (path: string) => `${baseURL}${path}`

export const getIssueDetails = async (postNumber: number) => {
  const response = await axios.get(withBaseURL(postNumber.toString()))

  return response;
}

