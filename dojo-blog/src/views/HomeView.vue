<template>
  <div class="home">
    <h2>Home</h2>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>loading</div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts.js";
export default {
  name: "Home",
  setup() {
    const { posts, error, load } = getPosts();

    return { posts, error, load };
  },
  data() {
    return {};
  },
  components: { PostList },
};
</script>
