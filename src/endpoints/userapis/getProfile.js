import React from 'react'
import axiosInstance from '../baseinstance/axiosInstance'
export const getUser = async (id) => {
  const response = await axiosInstance.get(`/user/getprofile/${id}`);
  return response.data;
}
