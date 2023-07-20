<template>
  <select class="select" :value="modelValue" @change="changeOption">
    <option value="" disabled selected>
      Choose one of the options
    </option>
    <option v-for="option in options"
            :key="option.value"
            :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select", props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      console.log(event)
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.select {
  padding: 0 5px;
  font-family: Trade-light, serif;
  cursor: pointer;
}
option {
  cursor: pointer;
}
</style>