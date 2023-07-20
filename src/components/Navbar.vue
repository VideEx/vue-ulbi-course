<template>
  <div class="container">
    <div class="navbar">
      <div @click="$router.push('/')"><img src="../../assets/Logo.png" alt="logo" class="logo"></div>
      <div class="navbar__btns">
        <my-button @click="$router.push('/posts')">
          Posts
        </my-button>
        <my-button @click="$router.push('/store')" style="margin-left: 20px">Store</my-button>
        <my-button @click="$router.push('/about')" style="margin-left: 20px">About</my-button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "my-nav",
  components: {}
}
</script>

<style>
.navbar {
  /*height: 50px;*/
  /*background-color: #b6e7e7;*/
  /*box-shadow: 2px 2px 4px gray;*/
  display: flex;
  align-items: center;
  padding: 15px 0;
}

.navbar__btns {
  margin-left: auto;
}

.logo {
  cursor: pointer;
}
/*.header {*/
/*  display: flex;*/
/*  justify-content: space-between;*/
/*}*/
/*.image,*/
/*.main-menu {*/
/*  vertical-align: middle;*/
/*  margin: auto 0;*/
/*  display: inline-block;*/
/*}*/
/*.main-menu-items{*/
/*  display: inline-block;*/
/*  vertical-align: middle;*/
/*}*/

/*li {*/
/*  list-style: none;*/
/*  display: inline-block;*/
/*  vertical-align: middle;*/
/*  color: #5A5A5A;*/
/*  font-family: Montserrat, sans-serif;*/
/*  font-size: 20px;*/
/*  font-style: normal;*/
/*  font-weight: 700;*/
/*  line-height: normal;*/
/*  letter-spacing: 0.4px;*/
/*  text-transform: capitalize;*/
/*  margin-right: 40px;*/

/*}*/

</style>