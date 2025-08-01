import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//community details
import getcommunitybyid from '../endpoints/community/getcommunitybyid'
import getcommunitytweets from '../endpoints/tweetapi/getcommunitytweets';
import members from '../endpoints/membership/members';
import Tweetpage from '../components/Tweetpage';
import { useNavigate } from 'react-router-dom';
//community tweets
//community members
function CommunityProfile() {
    const {community_id}=useParams();
    const [communityinfo,setcommunityinfo]=useState(null);
    const [tweets,settweets]=useState(null);
    const [communitymembers,setcommunitymembers]=useState(null);
    const navigate=useNavigate();
    useEffect(()=>{
       const getdetails=async()=>{
           const communityinfo =await getcommunitybyid(community_id);
           const tweets=await getcommunitytweets(community_id);
           const communitymembers=await members(community_id);
           setcommunityinfo(communityinfo.data);
           settweets(tweets.data);
           setcommunitymembers(communitymembers.data);
       }
       getdetails();
    },[])
  if(communityinfo&&tweets&&communitymembers){
    return (
      <div >

        <Tweetpage tweets={tweets}/>

        <button className='rounded-full bg-blue-600 px-4 py-6 hover:bg-blue-900'
         onClick={()=>{navigate(`/communityTweetForm/${community_id}`)}}>Post Tweet</button>
      </div>
    )
  }
  else{
    return <div className=' text-center container'>
       please wait
    </div>
  }
}

export default CommunityProfile
