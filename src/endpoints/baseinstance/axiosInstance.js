// src/api/axios.js
import axios from 'axios';

// ✅ Create a configured instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:2000',
  withCredentials: true, // So cookies like JWT are sent
  headers: {
    'Content-Type': 'application/json', // Default to JSON
  },
});
import { clearUser } from '../../slices/userSlice';
import { persistor } from '../../store/store'; // Import persistor to clear state on logout
import { store} from '../../store/store';

// 🚫 Handle session expiry globally
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error?.response?.status;
    

    if (status === 500 || status === 403) {
      store.dispatch(clearUser());
      await persistor.purge();
      window.location.href = "/auth";
    }

    return Promise.reject(error);
  }
);


export default axiosInstance; // ✅ Export it clearly
