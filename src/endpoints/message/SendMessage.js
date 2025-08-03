import axiosInstance from "../baseinstance/axiosInstance";
const SendMessage=async(recipientId,formdata)=>{
    try{
        const res=await axiosInstance.post(`/message/send/${recipientId}`,formdata,{
            headers: {
                'Content-Type': 'multipart/form-data', // 🔥 override default
            },
        })
        return res.data;
    }
    catch(error)
    {
        console.log(error);
    }
}
export default SendMessage;