import { useState } from "react";
import TweetCard from "../components/TweetCard";
import Tweetpage from "../components/Tweetpage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../endpoints/userapis/getProfile";
export default function UserProfile() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [data,setdata]=useState('loading');
  const id=useSelector(state=>state.user.user._id)
  useEffect(()=>{
    const fetchUser = async () => {
      const userData = await getUser(id);
      console.log(userData, "userDatajdlks;lfjd;lsjfa;ljd;ljfa;ldjf;lasj;lfjsd;lfjsa;dljf;sadj;");
      setdata(userData.data);
    };
    fetchUser();
  },[])

  const toggleFollow = () => setIsFollowing(!isFollowing);
  if (data === 'loading') {
    return <div>Loading...</div>;
  }
  console.log(data, "data");
  if(data)return (
    <div className="max-w-2xl mx-auto p-4 font-sans">
      {/* Profile Box */}
      <div className="bg-white shadow-xl rounded-2xl p-6 border border-blue-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={data.user?.avatar_url}
              alt="avatar"
              className="w-24 h-24 rounded-full object-cover shadow-md border-4 border-blue-500"
            />
            <div>
              <h2 className="text-3xl font-bold text-blue-600">{data.user.name}</h2>
              <p className="text-gray-600">@{data.user.username}</p>
              <p className="text-sm text-gray-500">{data.user.email}</p>
              <p className="mt-2 text-gray-700">{data.user.bio}</p>
              <div className="mt-2 flex gap-6 text-sm text-gray-600">
                <span><strong>{data.user.followers}</strong> Followers</span>
                <span><strong>{data.user.following}</strong> Following</span>
              </div>
            </div>
          </div>
          <button
            onClick={toggleFollow}
            className={`px-5 py-2 rounded-full text-white font-semibold transition ${
              isFollowing ? "bg-gray-400 hover:bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
        </div>
      </div>

      {/* Tweet Feed */}
      <Tweetpage tweets={data.tweets} />
      
      
      
    </div>
  );
}
