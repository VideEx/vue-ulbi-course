<template>
<button class="btn">
  <slot>

  </slot>
</button>
</template>

<script>
export default {
  name: "my-button"
}
</script>

<style scoped>

.btn {
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: #00806f;
  border: 1px solid #00806f;
  font-family: Trade-bold, serif;
  cursor: pointer;
}

.btn:hover {
  align-self: flex-end;
  padding: 10px 15px;
  background: #00806f;
  color: white;
  border: 1px solid #00806f;
}
</style>