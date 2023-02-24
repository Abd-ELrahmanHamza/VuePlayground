<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <teleport to="#modals" v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Signup now</a>
        <a href="#">More info</a>
      </template>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae</p>
    </Modal>
  </teleport>
  <button @click.alt="toggleModal">open modal (alt)</button>

  <teleport to="#modals" v-if="showWelcomeModal">
    <Modal @close="toggleWelcomeModal">
      <h1>Welcome to the app!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae</p>
      <template v-slot:links>
        <button @click="toggleWelcomeModal">Close</button>
      </template>
    </Modal>
  </teleport>
  <button @click.alt="toggleWelcomeModal">open welcome modal (alt)</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "My first vue app",
      header: "Sign up for the giveaway!",
      text: "Grab your ninja swag for half price!",
      showModal: false,
      showWelcomeModal: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleWelcomeModal() {
      this.showWelcomeModal = !this.showWelcomeModal;
    },
  },
};
</script>

<style>
#app,
#modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding: 10px;
}
</style>
