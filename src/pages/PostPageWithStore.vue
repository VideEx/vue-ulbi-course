<!--Разметка -->

<template>
  <div class="container">
    <div class="post-search">
      <my-input
          :model-value="searchQuery"
          @update:model-value="setSearchQuery"
          placeholder="Search...."
          v-focus
      />
    </div>

    <div class="app-buttons">
      <my-button class="new-post"
          @click="showDialog">
        Create new post
      </my-button>
      <my-select
          class="post-sort"
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          v-model="selectedSort"
          :options="sortOptions"/>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost">
      </post-form>
    </my-dialog>

    <post-list v-if="!isPostsLoading"
               :posts="sortedAndSearchPosts"
               @remove="removePost">
    </post-list>
    <div v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>


<!--Логика компонента-->
<script>
import postList from "@/components/postList";
import postForm from "@/components/postForm";
// import axios from "axios";
// import MyNav from "@/components/Navbar";
import MySelect from "@/components/UI/MySelect";
// import MyButton from "@/components/UI/MyButton";
// import MyInput from "@/components/UI/MyInput";

import {mapState, mapActions, mapMutations, mapGetters} from "vuex";

export default {
  components: {
    // MyNav,
    MySelect,
    postList,
    postForm
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts',
    }),
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },


  }, mounted() {
    this.fetchPosts();
  },
  // Вычислительная функция для сортировки массива с постами без мутации исходного массива
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchPosts: 'post/sortedAndSearchedPosts',
    })
  },
}

</script>

<style>

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.app-buttons {
  display: flex;
  justify-content: space-between;
  width: 35%;
  margin-left: auto;
}

.observer {
  background: transparent;
  height: 50px;
}

.post-search {
  width: 35%;
  margin-left: auto;
  /*display: flex;*/
  /*justify-content: flex-end;*/
}

.post-sort {
  /*margin-left: 42px;*/
}

.new-post {
  font-family: Sabon-light, serif;
}

</style>