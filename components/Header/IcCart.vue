<template>
  <button class="cart">
    <img :src="cartIcon" alt="Cart" />
    <div class="quantity">
      <p class="quantity__value">0</p>
    </div>
  </button>
</template>

<script setup lang="ts">
import cartIcon from "~/assets/icons/shopping-cart.svg";
</script>

<style scoped lang="scss">
.cart {
  position: relative;
  margin-left: 1.5rem;
  padding: 0;
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  background-color: transparent;
  img {
    width: 3.2rem;
    height: 3.2rem;
    @media (max-width: 520px) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  @media (max-width: 860px) {
    margin: 0;
  }
}
.quantity {
  position: absolute;
  top: -0.4rem;
  right: -0.9rem;
  width: 1.7rem;
  height: 1.7rem;
  background-color: rgb(214, 28, 31);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &__value {
    color: #ffff;
    font-size: 1rem;
  }
}
</style>
