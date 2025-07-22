import React from 'react'

import TweetCard from './TweetCard'
function Tweetpage({ tweets }) {
  return (
    <div  className="mt-6 space-y-6">
        {tweets.map((tweet) => (
          <TweetCard tweet={tweet}/>
          
        ))}
    </div>
  )
}

export default Tweetpage
