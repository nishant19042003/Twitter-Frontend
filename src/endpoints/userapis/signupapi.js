import React from 'react'
import axiosInstance from '../baseinstance/axiosInstance'

export const signupUser = async (data) => {
  const response = await axiosInstance.post('/user/create', data, {
    headers: {
      'Content-Type': 'multipart/form-data', // 🔥 override default
    },
  }); // ✅ Correct usage
  return response.data;
}
