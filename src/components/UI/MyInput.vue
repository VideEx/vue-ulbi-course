<template>
  <input class="input" :value="modelValue" @input="updateInput" type="text">
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  box-sizing: border-box;
}

.input:focus {
  border: 1px solid #00806f;
  outline: none;
  padding: 10px 15px;
}


</style>