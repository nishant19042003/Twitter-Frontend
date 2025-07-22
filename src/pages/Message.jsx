import React, { useEffect } from 'react'
import { getallUsers } from '../endpoints/userapis/getalluser'
import UserCard from '../components/UserCard'
import { useNavigate } from 'react-router-dom';
function Message() {
  const [users, setUsers] = React.useState([]); // State to hold the list of users
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUsers = async () => {  
      try {
        const users = await getallUsers();
        console.log(users);
        setUsers(users.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Message Page</h1>
      
      <div className="w-[100%]">
        {users.map((user) => (
          <div 
            key={user._id} 
            className="cursor-pointer"
            onClick={() => navigate(`/chat`)} // Navigate to chat page with user ID
          >
            <UserCard key={user._id} user={user}  />
          </div>
        ))}
      </div>
    </div>
  );

}

export default Message
