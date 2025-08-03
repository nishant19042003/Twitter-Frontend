// Chat.jsx
import React, {  useEffect, useState } from 'react';
import socket from './socket'; // your socket client
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import MessageItem from '../components/MessageItem';
import { CheckCircle2 } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { getUser } from '../endpoints/userapis/getProfile'; // Adjust the import based on your project structure
import GetPairMessages from '../endpoints/message/PairMessages';
import SendMessage from '../endpoints/message/SendMessage';
import SendMessageWithMedia from '../endpoints/message/SendMessageWithMedia';
const Chat = () => {
  const { recipientId } = useParams();
  const currentUser = useSelector((state) => state.user?.user);
  const currentUserId = currentUser?._id;
  const [messages, setMessages] = useState([]);
  const [recipient, setRecipient] = useState(null);
  useEffect(() => {
    const fetchRecipient = async () => {
      try {
        const user = await getUser(recipientId);
        const messages=await GetPairMessages(recipientId)
        setRecipient(user.data.user);
        setMessages(messages.data)
      } catch (error) {
        console.error('Error fetching recipient:', error);
      }
    };
    fetchRecipient();
  }, [recipientId]);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    
    socket.emit('join_chat', recipientId);
    //receive
    socket.on("receive-message", (data) => {
      console.log(data,"jjjjjjjjjjjjjjjjjjjjjjjjjjjj");
      setMessages((prev) => [...prev, data]);
    });
    

    return () => {
      socket.off('receive-message');
    };
  }, []);
  
  const createMessage = async (data) => {
    let message=null;
    const formdata=new FormData();
    formdata.append("content",data.message);
    if(data.media?.length||0>0){
      formdata.append("media",data.media[0]);
      const res=await SendMessageWithMedia(recipientId,formdata);
      message=res.data;
    }
    else{
      const res=await SendMessage(recipientId,formdata);
      message=res.data;
    }
    socket.emit('send-message', { currentUserId, message });
    setMessages((prev) => [...prev,message ]);
    reset();
  };

  return (
    <div className="flex flex-col justify-between h-full max-h-screen p-4 bg-gray-50">
      
      {/* Chat Header */}
      <div className="flex items-center gap-3 p-3 bg-white shadow rounded-lg mb-4">
        <img
          src={recipient?.avatar_url}
          alt={recipient?.username}
          className="w-12 h-12 rounded-full object-cover border-2 border-blue-600"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1 font-semibold text-lg text-gray-800">
            {recipient?.name || recipient?.username}
            {recipient?.varified && (
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
            )}
          </div>
          <span className="text-sm text-gray-500">@{recipient?.username}</span>
        </div>
      </div>

      {/* Message List */}
      <div className="overflow-y-auto flex-1 space-y-2 mb-4">
        {messages.map((msg,i) => (
          <MessageItem
            key={i}
            message={msg}
            sender={currentUser}
            recipient={recipient}
            isOwnMessage={msg.sender===currentUserId?true:false}
          />
        ))}
      </div>

      {/* Message Form */}
      <form
        onSubmit={handleSubmit(createMessage)}
        className="flex items-center gap-2 border-t pt-3 bg-white p-3 rounded-xl shadow"
      >
        <input
          type="text"
          {...register('message')}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <label className="cursor-pointer text-blue-600 font-medium px-2">
          📎
          <input
            type="file"
            {...register('media')}
            name="media"
            multiple
            className="hidden"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
