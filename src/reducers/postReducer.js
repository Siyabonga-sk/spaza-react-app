import { FETCH_POSTS, NEW_POST } from '../Actions/types';

const initialstate = {
    items: [],
    item: {}
}

export default function(state = initialstate, action){
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.thePosts
            };
        default:
         return state;   
    }
}