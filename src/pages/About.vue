<template>
<div class="about">
  <h1>Данное приложение создано с использованием Vue 3</h1>
  <h2>
    Вкладка Posts - реализована без vuex
  </h2>
  <h2>
    Вкладка Store - с помощью vuex
  </h2>
</div>
</template>

<script>
export default {
  name: "my-about"
}
</script>

<style scoped>
.about {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font-family: Sabon-bold, serif;
  /*font-size: 24px;*/
  padding-top: 30px;
}

h1 {
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 15px;
}

</style>