import React, { useEffect, useState } from 'react';
import checkmembership from '../endpoints/membership/membership';
import toggleMembership from '../endpoints/membership/togglemembership';
import { useNavigate } from 'react-router-dom';
function CommunityCard({ community }) {
  const { name, bio, picture, _id } = community;
  const [member, setMember] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    const handle = async () => {
      try {
        const res = await checkmembership(_id);
        setMember(res.data);
      } catch (err) {
        console.error("Error checking membership:", err);
      }
    };
    handle();
  }, [_id]);

  const toggle = async () => {
    setLoading(true);
    try {
      await toggleMembership(_id);
      setMember((prev) => !prev);
    } catch (err) {
      console.error("Error toggling membership:", err);
    }
    setLoading(false);
  };

  return (
    <div
      onClick={toggle}
      className={`group cursor-pointer bg-white shadow-lg rounded-2xl p-6 max-w-md mx-auto my-4 transition-transform hover:scale-[1.02]
        ${loading ? 'opacity-50 pointer-events-none' : ''}
      `}
    >
      <div className="flex items-center gap-4">
        <div className="rounded-full p-1 border-2 border-transparent group-hover:border-blue-500 transition-all duration-200">
          <img
            src={picture}
            alt={`${name} avatar`}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
          <p className="text-gray-600 text-sm">{bio}</p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <span
          className={`px-5 py-2 inline-block rounded-full font-medium transition-colors duration-200
            ${member ? 'bg-black text-white' : 'bg-blue-600 text-white'}
          `}
        >
          {loading ? 'Please wait...' : member ? 'Exit Community' : 'Join Community'}
        </span>
      </div>
      <div className="mt-2 text-center">
        <button  onClick={()=>{navigate(`/community/${community._id}`)}}
        className='rounded-full  bg-blue-400 hover:bg-blue-900 transition-all px-4 py-2 uppercase'>Visite</button>
      </div>
    </div>
  );
}

export default CommunityCard;
