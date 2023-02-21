<template>
  <div class="results">
    <h1>Results</h1>
    <p>Your reaction time was {{ score }}ms</p>
    <p class="rank">{{ rank }}</p>
  </div>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Lightning Fingers";
    } else if (this.score < 400) {
      this.rank = "Fast Fingers";
    } else {
      this.rank = "Slow Fingers";
    }
  },
};
</script>

<style>
.rank {
  font-size: 1.4rem;
  font-weight: bold;
  color: #0faf87;
}
</style>