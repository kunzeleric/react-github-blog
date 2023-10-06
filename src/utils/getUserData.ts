import axios from 'axios';

const baseURL = 'https://api.github.com/users/kunzeleric'

export const getUserData = async () => {
  const response = await axios({
    method: 'GET',
    url: baseURL,
  })
  return response;
}