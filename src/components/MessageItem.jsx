import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const MessageItem = ({ message, isOwnMessage, sender, recipient }) => {
  const { content, media } = message;
  const user = isOwnMessage ? sender : recipient;

  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex gap-3 max-w-[90%] ${isOwnMessage ? 'flex-row-reverse text-right' : ''}`}>
        
        {/* Avatar and Star */}
        <div className="relative">
          <img
            src={user?.avatar_url}
            alt={user?.username}
            className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover"
          />
          {user?.varified && (
            <CheckCircle2 className="absolute -bottom-1 -right-1 w-4 h-4 text-blue-600 bg-white rounded-full" />
          )}
        </div>

        {/* Message Content */}
        <div
          className={`px-4 py-2 rounded-xl shadow-sm ${
            isOwnMessage ? 'bg-blue-100' : 'bg-white'
          }`}
        >
          <div className="text-sm font-semibold text-gray-800 mb-1">
            @{user?.username}
          </div>
          <div className="text-gray-700 text-base whitespace-pre-wrap">{content}</div>

          {/* Media Rendering */}
          {media && media.length > 0 && (
            <div className="mt-2 grid gap-2">
              {media.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`media-${i}`}
                  className="rounded-lg max-h-64 object-cover border border-gray-300"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
