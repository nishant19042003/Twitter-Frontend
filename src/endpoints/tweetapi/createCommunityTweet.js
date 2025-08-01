import axiosInstance from "../baseinstance/axiosInstance";
const createcommunitytweet=async(formdata,community_id)=>{
    try{
        const res=await axiosInstance.post(`tweet/create/${community_id}`,formdata,{
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
export default createcommunitytweet