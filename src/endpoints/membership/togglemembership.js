import axiosInstance from "../baseinstance/axiosInstance";
const toggleMembership=async(community_id)=>{
    try{
        const res=await axiosInstance.post(`/membership/toggle/${community_id}`);
        return res.data;
    }
    catch(error){
        console.log(error);
    }
}
export default toggleMembership;