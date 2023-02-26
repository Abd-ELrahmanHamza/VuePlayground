<template>
  <div>
    <h1>Jobs</h1>
    <div v-for="job in jobs" class="job" :key="job.id">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { id: 1, title: "Job 1", description: "Description 1" },
        { id: 2, title: "Job 2", description: "Description 2" },
        { id: 3, title: "Job 3", description: "Description 3" },
      ],
    };
  },
};
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  max-width: 600px;
  margin: 10px auto;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>
