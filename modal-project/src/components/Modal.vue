<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
      <slot>default content</slot>
      <div class="actions">
        <slot name="links" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["header", "text", "theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style >
/*scoped*/
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.modal h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}

.modal.sale {
  background: crimson;
  color: white;
}

.modal.sale h1 {
  color: white;
}

.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
  color: #333;
}

.modal .actions a,
.modal.sale .actions button {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
  background: transparent;
}

.modal.sale .actions {
  color: white;
}

.modal.sale .actions a,
.modal.sale .actions button {
  color: white;
}
</style>