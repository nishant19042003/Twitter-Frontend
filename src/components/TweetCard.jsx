import React from 'react'
import {
  ThumbsUp,
  MessageCircle,
  Repeat,
} from "lucide-react";

function TweetCard({tweet}) {
    
  return (
    
    <div
    key={tweet._id}
    className="bg-white p-5 rounded-xl shadow-md border border-blue-100 hover:shadow-lg transition duration-200"
    >
    <div className="flex items-start gap-4 mb-3">
        <img
        src={tweet.owner.avatar_url}
        alt="user avatar"
        className="w-12 h-12 rounded-full object-cover border-2 border-blue-400"
        />
        <div>
        <div className="flex items-center gap-2">
            <span className="font-semibold text-blue-600">{tweet.owner.name}</span>
            <span className="text-gray-500 text-sm">@{tweet.owner.username}</span>
            <span className="text-gray-400 text-xs">· {new Date(tweet.createdAt).toLocaleDateString()}</span>
        </div>
        <p className="text-gray-800 mt-1">{tweet.content}</p>
        </div>
    </div>
    {tweet.media_url && (
        <img
        src={tweet.media_url}
        alt="tweet media"
        className="mt-2 rounded-lg max-h-96 w-full object-cover border border-gray-200"
        />
    )}

    {/* Tweet Actions */}
    <div className="flex gap-6 mt-4 text-gray-500 text-sm">
        <button className="flex items-center gap-1 hover:text-blue-600 transition">
        <ThumbsUp className="w-4 h-4" />
        Like
        </button>
        <button className="flex items-center gap-1 hover:text-blue-600 transition">
        <MessageCircle className="w-4 h-4" />
        Comment
        </button>
        <button className="flex items-center gap-1 hover:text-blue-600 transition">
        <Repeat className="w-4 h-4" />
        Retweet
        </button>
    </div>
    </div>
       
  )
}

export default TweetCard
