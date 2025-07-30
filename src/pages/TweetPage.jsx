import React from 'react'
import { useForm } from 'react-hook-form'

function TweetPage() {
    const {register,handleSubmit}=useForm();
    const submit=async(data)=>{
        console.log("hi===========>",data);
    }
  return (
    <form onSubmit={handleSubmit(submit)}>
        <input {...register('content',{required:true})}
        placeholder='content' type='text'/>
        <input {...register('media')} placeholder='media'
        type='file'/>
        <button type='submit'>click me</button>
    </form>
  )
}

export default TweetPage
