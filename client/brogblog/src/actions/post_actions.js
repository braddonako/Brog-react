import axios from 'axios';

import { ADD_POST } from './types';
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