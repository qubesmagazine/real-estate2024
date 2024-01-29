import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": '1992e1b5b1msh3ba6711d3b06d63p101f21jsn7142a0c408fb',
    },
  });
  return data
};

// headers: {
//     'X-RapidAPI-Key': '1992e1b5b1msh3ba6711d3b06d63p101f21jsn7142a0c408fb',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }
// }
