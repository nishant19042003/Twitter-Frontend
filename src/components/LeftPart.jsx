import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import LogoutButton from './Logout';

function LeftPart() {
  const authstatus = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!authstatus) {
      navigate('/auth');
    }
  }, [authstatus, navigate]);

  const elements = [
    { slug: '/home', name: 'Home' },
    { slug: '/communities', name: 'Communities' },
    { slug: '/notifications', name: 'Notifications' },
    { slug: '/message', name: 'Messages' },
    { slug: '/profile', name: 'Profile' }
  ];

  return (
    <div className="flex flex-col gap-4 p-6 bg-white shadow-lg rounded-2xl w-64 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h2>
      {elements.map((element) => (
        <button
          key={element.slug}
          onClick={() => navigate(element.slug)}
          className={`text-left px-4 py-2 rounded-lg text-base font-medium transition-all duration-200
            ${
              location.pathname === element.slug
                ? 'bg-blue-500 text-white shadow'
                : 'bg-gray-100 hover:bg-blue-100 text-gray-800'
            }`}
        >
          {element.name}
        </button>
      ))}
      <div className="mt-auto">
        <LogoutButton />
      </div>
    </div>
  );
}

export default LeftPart;
