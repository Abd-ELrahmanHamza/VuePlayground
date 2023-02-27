<template>
  <div>
    <h1>Jobs</h1>
    <div v-if="jobs.length">
      <div v-for="job in jobs" class="job" :key="job.id">
        <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
          <h2>{{ job.title }}</h2>
        </router-link>
      </div>
    </div>
    <div v-else>
      <h2>Loading...</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        this.jobs = data;
      })
      .catch((err) => {
        console.log(err);
      });
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
