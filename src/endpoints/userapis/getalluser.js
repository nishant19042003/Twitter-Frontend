import axiosInstance from '../baseinstance/axiosInstance'
export const getallUsers = async () => {
  const response = await axiosInstance.get(`/user/getallusers`);
  return response.data;
}