import axios from "axios";

const ACCESS_KEY = "Z0x-oOql2a8zz_adQSXj32mL3ZKlrj3Yzkfk8bxrm5g";
const BASE_URL = "https://api.unsplash.com";

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      orientation: "landscape",
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });

  return response.data;
};
