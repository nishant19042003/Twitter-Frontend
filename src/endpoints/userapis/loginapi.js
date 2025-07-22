// src/api/authApi.js
import axiosInstance from '../baseinstance/axiosInstance';

export const loginUser = async (data) => {
  const response = await axiosInstance.post('/user/login', data,{
    headers: {
        'Content-Type': 'multipart/form-data', // 🔥 override default
    },
  }); // ✅ Correct usage
  return response.data;
};
