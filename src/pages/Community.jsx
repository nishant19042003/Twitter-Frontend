import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getallcommunities from '../endpoints/community/getallcommunities';
import CommunityCard from '../components/CommunityCard';
function Community() {
  const navigate=useNavigate();
  const [communities, setCommunities] = useState([]);
  useEffect(() => {
    const getCommunities = async () => {
      try {
        const res = await getallcommunities();
        setCommunities(res.data);
      } catch (error) {
        console.error('Failed to fetch communities:', error);
      }
    };
    getCommunities();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Explore Communities
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {communities.length > 0 ? (
            communities.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No communities found.</p>
          )}
        </div>
        <div className='container text-center py-10'>
          <button className='rounded-xl  bg-blue-600 px-4 py-2 font-bold text-lg
          text-white uppercase hover:brightness-200' onClick={()=>{navigate("/createCommunity")}}>Create Community</button>
        </div>
      </div>
    </div>
  );
}

export default Community;
