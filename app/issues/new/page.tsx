
"use client"

import { Button,  TextField } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm,Controller} from "react-hook-form"
import axios from "axios"
import { useRouter } from 'next/navigation';

interface IssueFrom{
  title:string;
  descriptio:string;

}






const NewIssuePage = () => {
  const router=useRouter()

 const {register,control,handleSubmit}=useForm<IssueFrom>();
 






  return (
    <form className='max-w-xl p-8 space-y-3' onSubmit={handleSubmit(async(data)=> {
    await  axios.post('/api/issues',data)
      
    router.push('/issues')
    
    
    
    
     } )}>
      <TextField.Root>
    
     
    
    <TextField.Input placeholder="Title" {...register('title')} />
  </TextField.Root>
  <Controller 
  name='descriptio' 
  control={control}
  render={({field})=><SimpleMDE placeholder='Description' {...field}  />}
  
  
  />
  
  <Button>Submit New Issue</Button>
  
  </form>
  )
}

export default NewIssuePage