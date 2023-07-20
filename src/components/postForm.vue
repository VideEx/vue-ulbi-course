<template>
  <div>
    <h3>Список постов</h3>
    <form @submit.prevent>
      <!--          v-bind:value="post.title" -->
      <!--          @input="post.title = $event.target.value" -->
      <!--      Альтернативный вариант-->
      <my-input
          v-focus
          v-model="post.title"
          type="text"
          placeholder="название поста"/>
      <!--          v-bind:value="post.body" -->
      <!--          @input="post.body = $event.target.value" -->
      <!--      Альтернативный вариант-->
      <my-input
          v-model="post.body"
          type="text"
          placeholder="описание поста"/>
      <my-button
          class="btn"
          style="align-self: flex-end; margin-top: 15px;"
          @click="createPost">
        Создать
      </my-button>
    </form>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
export default {
  components: {MyInput},
  data() {
    return {
      post: {
        title: '',
        body: ''
      },
      // methods: {
      //   // Глубокое отслеживание объекта вотчером
      //   post: {
      //     handler(newValue) {
      //       console.log(newValue);
      //     },
      //     // Включение глубокого отслеживания:
      //     deep: true
      //   }
      // }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>



</style>