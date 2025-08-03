import axiosInstance from "../baseinstance/axiosInstance";
const SendMessageWithMedia=async(recipientId,formdata)=>{
    try{
        const res=await axiosInstance.post(`/message/sendwithmedia/${recipientId}`,formdata,{
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
export default SendMessageWithMedia;