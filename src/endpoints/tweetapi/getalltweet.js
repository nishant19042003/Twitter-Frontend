import axiosInstance from "../baseinstance/axiosInstance";

const getAllTweets = async () => {
  try {
    const response = await axiosInstance.get("/tweet");
    return response.data;
  } catch (error) {
    console.error("Error fetching tweets:", error);
    throw error;
  }
};

export default getAllTweets;
