import axiosInstance from '../baseinstance/axiosInstance';

export const logoutUser = async () => {
  const response = await axiosInstance.post('/user/logout'); // ✅ Correct usage
  return response.data;
};
