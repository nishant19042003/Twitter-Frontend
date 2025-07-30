import axiosInstance from "../baseinstance/axiosInstance";

const toggleLike = async (tweetid) => {
  try {
    const response = await axiosInstance.post(`/like/toggle/${tweetid}`);
    return response.data;
  } catch (error) {
    console.error("Error toggling like:", error);
    throw error;
  }
};

export default toggleLike;
