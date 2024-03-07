import { ref } from "vue";

let getPost = (id) => {
    
    let post = ref()
    let error = ref(null)
    let load = async() => {
        
        try {

            //fake loading function
            await new Promise( (response, reject)=>{
                setTimeout(response, 2000)
            } )

            let response = await fetch('http://localhost:3000/posts/'+id);

            if(response.status === 404){
                throw new Error ('Not found URL')
            }
            post.value = await response.json()

        } catch (err) {
            error.value = err.message
        }
    }

    return {post, error, load}
}

export default getPost;