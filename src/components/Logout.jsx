import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../endpoints/userapis/logoutapi.js";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../slices/userSlice";
import { persistor } from '../store/store.js';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    persistor.purge(); // Clear persisted state
    dispatch(clearUser());
    navigate("/auth");
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full text-left px-4 py-2 rounded-lg text-base font-medium bg-red-100 hover:bg-red-200 text-red-600 transition-all duration-200 shadow-sm"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
