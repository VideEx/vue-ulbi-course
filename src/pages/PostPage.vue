<!--Разметка -->

<template>
    <div class="container">
      <div class="post-search">
        <my-input
            v-model="searchOuery"
            placeholder="Search...."
            v-focus
        />
      </div>

      <div class="app-buttons">
        <my-button
            @click="showDialog">
          Создать пост
        </my-button>
        <my-select
            class="post-sort"
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
import axios from "axios";
// import MyNav from "@/components/Navbar";
// import MySelect from "@/components/UI/MySelect";

export default {
  components: {
    // MyNav,
    // MySelect,
    postList, postForm
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchOuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'},
      ]
    }
  },
  methods: {
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
    // Пагинация
    // changePage (pageNumber) {
    //   this.page = pageNumber
    // },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data;
      } catch (e) {
        alert('Ошибка')
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert('Ошибка')
      }
    }
  }, mounted() {
    this.fetchPosts();
  },
  // Вычислительная функция для сортировки массива с постами без мутации исходного массива
  computed: {
    postSorted() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      )
    },
    sortedAndSearchPosts() {
      return this.postSorted.filter(post => post.title.toLowerCase().includes(this.searchOuery.toLowerCase()))
    }
  },
  // Функция наблюдатель для сортировки массива с постами
  // watch:   {
  //   selectedSort(newValue) {
  //     this.posts.sort((post1, post2) => {
  //         return post1[newValue]?.localeCompare(post2[this.selectedSort])
  //     })
  //   },
  // Отслеживание модального окна
  // dialogVisible(newValue) {
  //   console.log(newValue)
  // }
  //}
  // Функция наблюдатель для отслеживания номера страницы и последующего вывода соответствующих постов
  // watch: {
  //   page() {
  //     this.fetchPosts()
  //   }
  // }
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