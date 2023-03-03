<template>
  <div class="details">
    <h2>Details</h2>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
    </div>
    <div v-else>loading</div>
  </div>
</template>

<script>
import getPost from "@/composables/getPost";
export default {
  props: ["id"],
  setup(props) {
    console.log(props);
    const { post, error, load } = getPost(props.id);
    return { post, error, load };
  },
};
</script>

<style></style>
