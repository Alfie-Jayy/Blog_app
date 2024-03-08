<template>
  <div class="main">
    
    <form @submit.prevent="Create" >

        <div>
            <label class="label">Blog Title</label>
            <input class="input" type="text" v-model="title" />
        </div>
        <span class="error" v-if="titleError">Title field is required!</span>
        
        <div>
            <label class="label">Blog Detail</label>
            <input class="input" type="text" v-model="detail" />
        </div>
        <span class="error" v-if="detailError">Detail field is required!</span>
        
        <div>
            
            <label class="label">Tag (click 'enter' to add)</label>
            <input class="input" type="text" v-model="tag" @keydown.enter.prevent = "CreateTag" />
            
            <span v-if="includeError" class="error" >Your tag is already in the list!</span>            
            
            <div class="tag-parent">
                <div v-for="tag in tags" class="form-tag" >
                    <p>{{ tag }}  <i class="fa fa-remove remove" @click="Remove(tag)" ></i> </p>
                </div>
            </div>
        
        </div>

        <button type="submit" class="btn">Create</button>
    
    </form>
  
  </div>
</template>

<script>
import { ref} from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    let title = ref("");
    let detail = ref("");
    let tag = ref("");
    let tags = ref([]);
    let titleError = ref(false);
    let detailError = ref(false);
    let includeError = ref(false);
    let router = useRouter()

    let CreateTag = () => {
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
        includeError.value = false;
      } else {
        includeError.value = true;
      }
      tag.value = "";
    };

    let Create = async() => {
      
      if (title.value == "") {
        titleError.value = true;
      } else {
        titleError.value = false;
      }

      if (detail.value == "") {
        detailError.value = true;
      } else {
        detailError.value = false;
      }

      if(title.value && detail.value){
        await fetch ('http://localhost:3000/posts', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body:JSON.stringify({
          title: title.value,
          detail: detail.value,
          tags: tags.value
        })
      })
      router.push('/')
      }
    
    };

    let Remove = (tag) => {
      tags.value = tags.value.filter((t)=>{
        return t != tag
      })

    };

    return {
      title,
      detail,
      tag,
      tags,
      titleError,
      detailError,
      includeError,
      CreateTag,
      Create,
      Remove
    };
  
},
};
</script>

<style></style>
