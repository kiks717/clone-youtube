import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  method: 'GET',
  params: {
    maxResults : 50,
  },
  
  headers: {
    'X-RapidAPI-Key': '6339b21e39msh081a048417565a0p17ecc0jsn46b9b4a0b25f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const fetchFromApi = async(url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}
