import axios from 'axios'
import {GET_POST,GET_POSTS,CREATE_POST,UPDATE_POST,DELETE_POST} from './types'

const Url = 'https://60b6667617d1dc0017b87c29.mockapi.io/'

// Get all posts 

export const getPosts = () =>async dispatch =>{
    
    try {
        const res = await axios.get(`${Url}/posts`)
        dispatch({
            type:GET_POSTS,
            pyload:res.data
        })
        
    } catch (err) {
        console.log(err.msg)
    }

}

// Get Post
export const getPost = id =>async dispatch =>{
    
    try {
        const res = await axios.get(`${Url}/posts/${id}`)
        dispatch({
            type:GET_POST,
            pyload:res.data
        })
     
    } catch (err) {
        console.log(err.msg)
    }

}

// Create post
export const createPost = (formData) =>async dispatch =>{
    
    try {
     const config= {
            headers:{
                'Content-Type':'application/json'
            }
        }
        const res = await axios.post(`${Url}/posts`,formData,config)
        dispatch({
            type:CREATE_POST,
            pyload:res.data
        })
        
    } catch (err) {
        
        console.log(err.msg)
    }

}

// Update post

export const updatePost =(id,formData,history)=> async dispatch =>{

    console.log(formData)
    try {
        const config = {
            headers:{
                'Conten-Type':'application/json'
            }
        }
        const res = await axios.put(`${Url}/posts/${id}`,{text:formData},config)
        dispatch({
            type:UPDATE_POST,
            pyload:res.data
        })
      
            history.push('/')
    } catch (err) {
     
        console.log(err.msg)
    }
}


// Delete post
export const deletePost = id =>async dispatch =>{
    
    try {
       await axios.delete(`${Url}/posts/${id}`)
        dispatch({
            type:DELETE_POST,
            pyload:id
        })
    } catch (err) {
        console.log(err.msg)
    }

}
