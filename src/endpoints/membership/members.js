import axiosInstance from "../baseinstance/axiosInstance";
const members=async(Community_id)=>{
    try{
        const memberslist=await axiosInstance.get(`/membership/members/${Community_id}`);
        return memberslist.data;
    }
    catch(error){
        console.log(error);
    }
}
export default members;