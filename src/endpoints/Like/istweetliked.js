import axiosInstance from "../baseinstance/axiosInstance";
const istweetliked=async(tweetid)=>{
    try{
        const res=await axiosInstance.get(`/like/isliked/${tweetid}`)
        return res.data;
    }
    catch(error){
        console.log(error);
    }
}
export default istweetliked;