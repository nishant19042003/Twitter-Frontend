import axiosInstance from "../baseinstance/axiosInstance";
const getcommunitytweets=async(community_id)=>{
    try{
        const res=await axiosInstance.get(`/tweet/communitytweets/${community_id}`);
        return res.data;
    }
    catch(error){
        console.log(error);
    }
}
export default getcommunitytweets;