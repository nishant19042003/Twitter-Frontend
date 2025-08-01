import React from 'react'
import TweetPage from './TweetPage'
import { useParams } from 'react-router-dom'
function CommuntiyTweetFrom() {
    const {community_id}=useParams();
  return (
    <TweetPage type={'community'} community_id={community_id}/>
  )
}

export default CommuntiyTweetFrom
