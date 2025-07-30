import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function ProfileCard() {
    const user=useSelector(state=>state.user.user);
    const navigate=useNavigate();
  return (
    <div className="w-64 h-64 bg-white rounded-xl shadow-md p-4 relative">
      {/* Top Blue Banner and Avatar */}
      <div className="w-full h-20 bg-blue-500 rounded-t-xl flex justify-center items-end">
        <img
          src={user.avatar_url}
          alt="Avatar"
          className="w-16 h-16 rounded-full border-4 border-white -mb-8"
        />
      </div>

      {/* User Info */}
      <div className="mt-12 text-center">
        <h2 className="text-lg font-semibold text-blue-600">{user.name}</h2>
        <p className="text-sm text-gray-500">{user.username}</p>
      </div>

      {/* Bottom Right Button */}
      <button
        className="absolute bottom-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
        onClick={()=>{navigate('/tweet')}}
      >
         Create New Tweet
      </button>
    </div>
  );
}
export default ProfileCard;