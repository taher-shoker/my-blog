
import axios from 'axios'
import {GET_COMMENTS,GET_COMMENT, ADD_COMMENT,UPDATE_COMMENT,DELETE_COMMENT} from './types'

const Url = 'https://60b6667617d1dc0017b87c29.mockapi.io/'



// Get all comments for one post

export const getComments = (id) =>async dispatch =>{
    
    try {
        const res = await axios.get(`${Url}/posts/${id}/comments`)
        dispatch({
            type:GET_COMMENTS,
            pyload:res.data
            
        })

    } catch (err) {
        console.log(err.msg)
    }

} 
// Get Current comment for one post

export const getComment = (postId,id) =>async dispatch =>{
    
    try {
        const res = await axios.get(`${Url}/posts/${postId}/comments/${id}`)
        dispatch({
            type:GET_COMMENT,
            pyload:res.data
            
        })

    } catch (err) {
        console.log(err.msg)
    }

} 

// Add comment 
export const addComment = (postId,formData) =>async dispatch =>{
    
    try {
     const config= {
            headers:{
                'Content-Type':'application/json'
            }
        }
        const res = await axios.post(`${Url}/posts/${postId}/comments`,formData,config)
        dispatch({
            type:ADD_COMMENT,
            pyload:res.data
        })
       
    } catch (err) {
        console.log(err.msg)
    }

}


export const updateComment =(postId,id,formData,history)=> async dispatch =>{

    
    try {
        const config = {
            headers:{
                'Conten-Type':'application/json'
            }
        }
        const res = await axios.put(`${Url}/posts/${postId}/comments/${id}`,{text:formData},config)
        dispatch({
            type:UPDATE_COMMENT,
            pyload:res.data
        })
            history.push(`/posts/${postId}`)
    } catch (err) {
        console.log(err.msg)
    }
}

// Delete comment 
export const deleteComment = (postId,commentId) =>async dispatch =>{

    try {
     
        await axios.delete(`${Url}/posts/${postId}/comments/${commentId}`)
        dispatch({
            type:DELETE_COMMENT,
            pyload:commentId
        })
        
    } catch (err) {
       console.log(err.msg)
    }

}
