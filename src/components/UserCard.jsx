import React from 'react';
import { CheckCircle2 } from 'lucide-react';
const UserCard = ({ user }) => {
  
  return (
    <div  className="w-[95%] max-w-2xl h-20 flex items-center gap-4 px-4 py-3 bg-white border border-blue-600 rounded-xl shadow-md transition hover:shadow-lg hover:bg-blue-50 cursor-pointer">
      <img
        src={user.avatar_url}
        alt={user.username}
        className="w-14 h-14 rounded-full object-cover border-2 border-blue-600"
      />
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1 text-lg font-semibold text-gray-800">
          {user.name}
          {user.varified && (
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
          )}
        </div>
        <span className="text-sm text-gray-600">@{user.username}</span>
      </div>
    </div>
  );
};

export default UserCard;
