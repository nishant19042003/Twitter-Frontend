import axiosInstance from "../baseinstance/axiosInstance";
const getcommunitybyid=async(community_id)=>{
    try{
        const res=await axiosInstance.get(`/community/getcommunitybyid/${community_id}`);
        return res.data;
    }
    catch(error){
        console.log(error);
    }
}
export default getcommunitybyid;