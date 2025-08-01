import axiosInstance from "../baseinstance/axiosInstance";
const createtweet=async(formdata)=>{
    try{
        const res=await axiosInstance.post('/tweet/create',formdata,{
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
export default createtweet;