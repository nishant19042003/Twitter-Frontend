import axiosInstance from "../baseinstance/axiosInstance";
const checkmembership=async(community_id)=>{
    try{
       const res=await axiosInstance.get(`/membership/ismember/${community_id}`);
       return res.data;
    }
    catch(error){
        console.log(error);
    }
}
export default checkmembership;