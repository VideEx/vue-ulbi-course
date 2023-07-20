<template>
  <div class="post">
    <div class="post-items">
      <div class="post-item">
        <div class="post-item-title">
          <h2>{{ post.title }}</h2>
        </div>
        <div class="post-item-body">
          {{ post.body }}
        </div>
      </div>
      <div class="post__btns">
        <my-button @click="$router.push(`/posts/${post.id}`)">
          View
        </my-button>
<!--        @click="$emit('remove', post)"-->
        <my-button @click="$emit('remove', post)">
          Delete
        </my-button>
      </div>
    </div>
  </div>

</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
  components: {MyButton},

  props: {
    post: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>



.post {
  display: inline-block;
  vertical-align: middle;
  padding: 20px;
  margin: 12px 12px;
  border: 1px solid rgba(0, 0, 0, 0.32);
  border-radius: 10px;
  width: 282px;
  box-shadow: 1px 1px 4px gray;
}

.post:hover {
  box-shadow: 3px 3px 4px gray;
}

.post-items {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.post-item-title {
  font-family: Trade-bold, serif;
  text-align: justify;
  letter-spacing: 2px;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  height: 62px;
}
.post-item-title:after {
  content: "";
  text-align: justify;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 1.2em;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), white 100%);
  pointer-events: none;
}

.post-item-body {
  font-family: Sabon-light, serif;
  text-align: justify;
  /*padding: 0 5px 15px 5px;*/
  margin: 0 5px 15px 5px;
  overflow: hidden;
  position: relative;
  height: 100px;
}

.post-item-body:after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 1.2em;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), white 100%);
  pointer-events: none;
  text-align: justify;
}
/*.likes {*/
/*  text-decoration: underline;*/
/*  padding: 10px;*/
/*}*/

/*.post-item {*/
/*  margin: 0 12px;*/
/*}*/

.post__btns {
  width: 100%;
  display: flex;
  /*flex-direction: row;*/
  justify-content: space-around;
}
/*.post {*/
/*  display: inline-block;*/
/*  vertical-align: middle;*/
/*  padding: 10px;*/
/*  margin-right: 10px;*/
/*  margin-top: 25px;*/
/*  !*border: 2px solid teal;*!*/
/*  height: 345px;*/
/*  width: 282px;*/
/*  border-radius: 10px;*/
/*  border: 1px solid rgba(0, 0, 0, 0.32);*/
/*  color: #000000;*/
/*  background-image: url("../../assets/mountains.png");*/
/*}*/

/*.post-item {*/
/*  height: 100%;*/
/*  background: #ffffff;*/
/*  text-align: right;*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  justify-content: flex-end;*/
/*  align-items: flex-end;*/
/*}*/

/*.post-item-title {*/
/*  margin-bottom: 25px;*/
/*}*/

/*.post-item-title:after {*/
/*  content: url("../../assets/delimiter.png");*/
/*}*/

/*.post-item-body {*/
/*  margin-top: -20px;*/
/*}*/

/*.post-item-delimiter {*/
/*  margin-top: 80%;*/
/*}*/

/*.view-post {*/
/*  margin-top: 20px;*/
/*  align-self: flex-start;*/
/*  height: 100%;*/
/*  cursor: pointer;*/

/*}*/


</style>