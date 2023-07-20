<template>
  <div class="app">
    <MyNav></MyNav>
    <router-view></router-view>
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar";
import MyNav from "@/components/Navbar";
export default {
  components: {MyNav}
}
</script>

<style>

@font-face {
  font-family: 'Sabon-bold';
  src: url("../public/fonts/Sabon/SabonCyr-Bold.woff") format('woff');
}
@font-face {
  font-family: 'Sabon-light';
  src: url("../public/fonts/Sabon/SabonCyr-Roman.woff") format('woff');
}
@font-face {
  font-family: 'Trade-bold';
  src: url("../public/fonts/TradeGothic/TradeGothicLT-Bold.woff") format('woff');
}
@font-face {
  font-family: 'Trade-light';
  src: url("../public/fonts/TradeGothic/TradeGothicLT-Light.woff") format('woff');
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app {
  /*padding: 20px;*/
  max-width: 1200px;
  margin: 0 auto;
}

.bold-sabon{
  font-family: Sabon-bold, serif;
}

.bold-trade {
  font-family: Trade-bold, serif;
}

.light-sabon {
  font-family: Sabon-light, serif;
}

.light-trade {
  font-family: Trade-light, serif;
}
@font-face {
  font-family: 'IBM-medium';
  src: url("../public/fonts/IBMPlex/IBMPlexSans-Medium.ttf") format('truetype');
}

/**{*/
/*  font-family: IBM-medium, serif;*/
/*}*/
</style>