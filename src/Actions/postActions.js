import { FETCH_POSTS, NEW_POST } from './types';
import Shops from '../shops'

export function fetchPosts() {

    return function (dipatch) {
        fetch({Shops})
        .then(res => res.json())
        .then(posts => dipatch({
            type: FETCH_POSTS,
            thePosts: posts
        }));
    }
};