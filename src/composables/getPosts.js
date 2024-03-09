import { ref } from 'vue';
import {db} from '../firebase/config'

let getPosts = () => {
  
  let posts = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      
      let response = await db.collection('posts').get();
      posts.value = response.docs.map( (doc) => {
          return {id:doc.id,...doc.data()}
      } )
    
    } catch (err) {
      error.value = err.message;
    }
  }

  return {posts, error, load}

};

export default getPosts;
