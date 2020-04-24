import axios from 'axios';

import { ADD_POST, GET_ALL_POSTS } from './types';
import {
    ARTICLES_SERVER
} from '../Components/utils/misc';

export function addPost(datatoSubmit) {

    const request = axios.post(`${ARTICLES_SERVER}/new`, datatoSubmit)
        .then(response => response.data);

    return {
        type: ADD_POST,
        payload: request
    }
}

// export function getPostById(datatoSubmit){
//     const request = axios.get(`${ARTICLES_SERVER}/show_by_id?_id=`)
// }

   export function getAllPosts() {
        // we are fetching the show all blog posts here through axios -- Only admins can access this post 
        const request = axios.get(`${ARTICLES_SERVER}/show`)
        .then(response => response.data)
        return {
            type: GET_ALL_POSTS,
            payload: request
        }
    }
