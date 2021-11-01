import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getDeals = async (cancelToken) => {
  console.log(cancelToken);

  const res = await api.get("/api/test/deals", { cancelToken });
  return res.data.deals;
};
