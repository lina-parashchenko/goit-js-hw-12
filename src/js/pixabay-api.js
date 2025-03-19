import axios from "axios";

const API_KEY = "49318761-deb5d950ade63202697546ac6";
const BASE_URL = "https://pixabay.com/api/";



export async function fetchImages(query, page = 1, perPage = 15) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        t: new Date().getTime(),
         page: page,
        per_page: perPage,
      },
    });

      if (response.data.hits.length === 0) {
      throw new Error("No images found");
    }



    return {
      images: response.data.hits,
      total: response.data.totalHits,
    };
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
    
    
    
  }
}


