<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog-content">
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "my-dialog",
  mixins: [toggleMixin],
  mounted() {
    console.log("dialog mounted");
  }
}
</script>

<style scoped>
.dialog {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  z-index: 1;
}

.dialog-content{
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 380px;
  padding: 20px;
}
</style>