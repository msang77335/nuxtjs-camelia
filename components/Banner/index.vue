<template>
  <div class="banner">
    <Menu />
    <Cate />
  </div>
</template>

<script setup lang="ts">
import Cate from "./Cate.vue";
import Menu from "./Menu.vue";
</script>

<style scoped lang="scss">
.banner {
  @media (max-width: 520px) {
    display: none;
  }
}
</style>
