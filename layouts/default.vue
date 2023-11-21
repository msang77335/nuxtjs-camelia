<template>
  <div class="wrapper default-layout">
    <Header />
    <Banner />
    <slot />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
