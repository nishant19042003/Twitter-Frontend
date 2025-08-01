import axiosInstance from "../baseinstance/axiosInstance";
const GetPairMessages=async(recipientId)=>{
    try{
        const res=await axiosInstance.get(`/message/getpairmessages/${recipientId}`)
        return res.data;
    }
    catch(error){
        console.log(error)
    }
}
export default GetPairMessages;