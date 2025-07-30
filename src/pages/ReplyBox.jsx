import { useSelector } from "react-redux";
import UserCard from "../components/UserCard";
import createreply from "../endpoints/reply/createreply";
import { useForm } from "react-hook-form"; 
function ReplyBox({tweet_id,onclose}) {
  const user=useSelector(state=>state.user.user);
  const onSubmit=async(data)=>{
   const formdata=new FormData();
   formdata.append('content',data.content);
   await createreply(tweet_id,formdata);
   onclose();
  }   
  const {
    register,        // to register input fields
    handleSubmit,    // handles form submission         
    formState: { errors } // validation errors
  } = useForm();
    
  return (
    <>
    <UserCard user={user}/>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <textarea
        {...register('content', { required: true })}
        placeholder="Write your reply..."
        className="w-full p-2 border border-gray-300 rounded"
      />
      {errors.content && <p className="text-red-500 text-sm">Reply is required</p>}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit Reply
      </button>
    </form>
    </>
  );
}
export default ReplyBox;