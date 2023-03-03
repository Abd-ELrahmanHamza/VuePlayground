import { ref } from "vue";

const getPost = (id) => {
  const post = ref({});
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts/" + id);
      if (!data.ok) {
        throw Error("No data available");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  load();

  return { post, error };
};

export default getPost;
