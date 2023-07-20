<template>
<!--  <h2>Список постов: </h2>-->
  <div class="post-list-container" v-if="posts.length > 0">
    <transition-group name="post-list">
    <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
    >
    </post-item>
    </transition-group>
  </div>
  <div v-else class="post-list-disabled">
    Попробуйте обновить страницу...
  </div>
</template>

<script>
import postItem from "@/components/postItem";
export default {
  components: {postItem},

  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

.post-list-container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  /*max-width: 1200px;*/
  margin: 0 -12px;
  /*font-size: 0;*/
}
.post-list-item {
  transition: all 0.8s ease;
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}

.post-list-move {
  transition: transform 0.4s ease;
}

.post-list-disabled {
  width: 50%;
  margin: 0 auto;
  text-align: center;
  font-family: Sabon-bold, serif;
  font-size: 24px;
  padding-top: 30px;
}

</style>