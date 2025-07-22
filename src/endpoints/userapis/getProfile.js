import React from 'react'
import axiosInstance from '../baseinstance/axiosInstance'
export const getUser = async () => {
  const response = await axiosInstance.get(`/user/getprofile`);
  return response.data;
}
