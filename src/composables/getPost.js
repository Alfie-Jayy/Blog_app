import { ref } from "vue";
import {db} from '../firebase/config'

let getPost = (id) => {
    
    let post = ref()
    let error = ref(null)
    let load = async() => {
        
        try {

            let response = await db.collection('posts').doc(id).get()
            post.value = {id:response.id,...response.data()}           

        } catch (err) {
            error.value = err.message
        }
    }

    return {post, error, load}
}

export default getPost;