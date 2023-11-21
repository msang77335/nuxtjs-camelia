<template>
  <div class="search">
    <form class="form">
      <input
        class="form__input"
        type="text"
        placeholder="Nhập tên sản phẩm..."
      />
      <NuxtLink to="/search?products">
        <button class="form__submit">
          <img :src="searchIcon" alt="Search" /></button
      ></NuxtLink>
    </form>
  </div>
</template>

<script setup lang="ts">
import searchIcon from "~/assets/icons/icons8-search.svg";
</script>

<style scoped lang="scss">
.search {
  position: relative;
}
.form {
  display: flex;
  &__input {
    border-radius: 3px;
    transition: all 0.15s linear;
    font-family: "Futura", sans-serif;
    border: none;
    color: #666666;
    width: 20rem;
    padding: 0.8rem 1rem;
    border: 1px solid #f0ebeb;
    &::placeholder {
      font-family: "Futura", sans-serif;
    }
    &:focus {
      border: 1px solid rgb(84, 84, 87);
    }
  }
  &__submit {
    border: none;
    background-color: rgb(84, 84, 87);
    color: #ffff;
    border-radius: 3px;
    width: 3.8rem;
    height: 3.8rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s linear;
    margin-left: 0.5rem;
    img {
      position: relative;
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
