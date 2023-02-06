import axios from "axios";

const api = axios.create({
  baseURL: "https://game-reviews-k7fw.onrender.com/api",
});

export const getAllReviews = () => {
  return api.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};
