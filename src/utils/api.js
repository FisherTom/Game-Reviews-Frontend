import axios from "axios";

const api = axios.create({
  baseURL: "https://game-reviews-k7fw.onrender.com/api",
});

export const getAllReviews = (category = "", queries) => {
  let endpoint = "/reviews?";
  if (category !== "") {
    endpoint += `category=${category}&`;
  }
  endpoint += queries;

  console.log(endpoint);
  return api.get(endpoint).then((res) => {
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

export const patchReviewVotes = (review_id, inc) => {
  return api.patch(`/reviews/${review_id}`, { inc_votes: inc }).then((res) => {
    return res.data.review;
  });
};

export const getAllUsers = () => {
  return api.get("/users").then((res) => {
    return res.data.users;
  });
};

export const postComment = (review_id, username, body) => {
  return api
    .post(`/reviews/${review_id}/comments`, { username, body })
    .then((res) => {
      return res.data.comment;
    });
};

export const getAllCategories = () => {
  return api.get("/categories").then((res) => {
    return res.data.categories;
  });
};
