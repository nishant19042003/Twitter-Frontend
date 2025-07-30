import axiosInstance from "../baseinstance/axiosInstance";

const deleteNotification = async (notificationId) => {
  try {
    const response = await axiosInstance.delete(`/notifications/delete/${notificationId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting notification:", error);
    throw error;
  }
};

export default deleteNotification;
