import axiosInstance from "../baseinstance/axiosInstance";
const CreateCommunity=async(formdata)=>{
    try{
        const res=await axiosInstance.post("/community/create",formdata,{
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
export default CreateCommunity;