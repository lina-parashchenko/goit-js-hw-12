import axios from "axios";

const API_KEY = "49318761-deb5d950ade63202697546ac6";
const BASE_URL = "https://pixabay.com/api/";



export async function fetchImages(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        t: new Date().getTime(),
      },
    });

 console.log(response.data);

    return response.data.hits;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}


