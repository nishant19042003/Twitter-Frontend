import axiosInstance from "../baseinstance/axiosInstance";

const TotalTweetLike = async (tweetid) => {
  try {
    const response = await axiosInstance.get(`/like/likes/${tweetid}`);
    return response.data;
  } catch (error) {
    console.error("Error toggling tweet like:", error);
    throw error;
  }
};

export default TotalTweetLike;
