import axiosInstance from "../baseinstance/axiosInstance";

const createNotification = async (notificationData) => {
  try {
    const response = await axiosInstance.post("/notifications", notificationData);
    return response.data;
  } catch (error) {
    console.error("Error creating notification:", error);
    throw error;
  }
};

export default createNotification;
