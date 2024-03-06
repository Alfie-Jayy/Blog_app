import { ref } from 'vue';

let getPosts = () => {
  
  let jobs = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      
      let response = await fetch("http://localhost:3000/posts");

      if (response.status == 404) {
        throw new Error("not found URL");
      }

      jobs.value = await response.json();
    
    } catch (err) {
      error.value = err.message;
    }
  }

  return {jobs, error, load}

};

export default getPosts;
