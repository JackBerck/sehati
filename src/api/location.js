import axios from "axios";

export const getProvince = async () => {
  try {
    const response = await axios.get(
      "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getCity = async (provinceId) => {
  try {
    const response = await axios.get(
      `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
