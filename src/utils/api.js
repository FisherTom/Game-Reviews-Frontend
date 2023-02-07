import axios from "axios";

const api = axios.create({
  baseURL: "https://game-reviews-k7fw.onrender.com/api",
});

export const getAllReviews = () => {
  return api.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};

export const getReviewById = (review_id) => {
  return api.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getReviewComments = (review_id) => {
  return api.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const getUserbyUsername = (username) => {
  return api.get(`/users/${username}`).then((res) => {
    return res.data.user;
  });
};

///api/reviews/:review_id/comments
