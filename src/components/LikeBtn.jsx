import React, {  useEffect, useState } from 'react'
import toggleLike from '../endpoints/Like/toggle'
import { ThumbsUp } from "lucide-react";
import TotalTweetLike from '../endpoints/Like/tweetlikes';
import istweetliked from '../endpoints/Like/istweetliked';
function LikeBtn({type,contentId}) {
  console.log("contentid",contentId)
  const [Like,setLike]=useState(0);
  const [isliked,setisliked]=useState(false);
  const likes=async() => {
    try {
      const res = await TotalTweetLike(contentId);
      const likestatus=await istweetliked(contentId);
      setisliked(likestatus.data);
      if(res.data.length>0)setLike(res.data.length);
    }
    catch (error) {
      console.error("Error fetching likes:", error);
    }
  }
  const handleLike = async () => {
    try {
      if(type=='tweet') {   
        await toggleLike(contentId);
        setisliked(prev=>!prev);
        if(isliked)setLike(prev=>prev-1);
        else setLike(prev=>prev+1);
        
    } else {
          // Handle other content types if needed
          console.log("Unsupported content type for liking");
        return;
 }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };
  useEffect(() => {
    if(type=='tweet') {
      likes();
    } else {
      // Handle other content types if needed
      console.log("Unsupported content type for liking");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type,contentId]);

  
  


  return (
   <button className={`flex items-center gap-1 text-sm ${isliked ? 'text-blue-500' : 'text-black'}`}
   onClick={handleLike}>
        <ThumbsUp className="w-4 h-4" />
        <span className="text-sm">{Like}</span>
    </button>
  )
}

export default LikeBtn
