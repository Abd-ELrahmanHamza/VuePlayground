<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h2>{{ post.title }}</h2>
    </router-link>
    <h3>{{ post.title }}</h3>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">
      {{ tag }}
    </span>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, onUpdated } from "vue";
export default {
  props: ["post"],
  setup(props) {
    onMounted(() => console.log("component mounted"));
    onUnmounted(() => console.log("component unmounted"));
    onUpdated(() => console.log("component updated"));
    const snippet = computed(() => {
      return props.post.body.slice(0, 100) + "...";
    });
    return { snippet };
  },
};
</script>

<style></style>
