import axiosInstance from "../baseinstance/axiosInstance";
const getallcommunities=async()=>{
    try{
        const communities=await axiosInstance.get("/community/getallcommunities");
        return communities.data;
    }
    catch(error){
        console.log(error);
    }
}
export default getallcommunities;