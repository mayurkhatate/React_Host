import React from 'react'
import { useParams } from 'react-router-dom'

export const PostDetail = () => {
    let {id} = useParams();
    console.log(id);
  return (
    <>
        <h1>{id}</h1>
        
    </>
  )
}
export default PostDetail
