import axiosInstance from "../baseinstance/axiosInstance";
const createreply=async(tweet_id,formdata)=>{
    try{
        const res=await axiosInstance.post(`/reply/create/${tweet_id}`,formdata,{
            headers: {
                'Content-Type': 'multipart/form-data', // 🔥 override default
            },
        });
        return res.data;
      
    }
    catch(error){
        console.log(error);
    }
}
export default createreply;