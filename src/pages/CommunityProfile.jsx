import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
//community details
import getcommunitybyid from '../endpoints/community/getcommunitybyid'
import getcommunitytweets from '../endpoints/tweetapi/getcommunitytweets';
//community tweets
//community members
function CommunityProfile() {
    const {community_id}=useParams();
    useEffect(()=>{
       const getdetails=async()=>{
           const res =await getcommunitybyid(community_id);
           console.log(res);
       }
       getdetails();
    },[])
  return (
    <div>
      
    </div>
  )
}

export default CommunityProfile
