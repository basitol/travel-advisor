import axios from "axios";
const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";

const options = {
  params: {
    latitude: "12.91285",
    longitude: "100.87808",
  },
  headers: {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": "296578361cmsh142ad23c7b30bd1p1c35fejsn191419036800",
  },
};

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);

    return data;
  } catch (error) {
    console.log(error);
  }
};
