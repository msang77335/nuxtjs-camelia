<template>
  <div>
    <div class="wrapper menu">
      <div class="container">
        <ul class="menu__list">
          <li class="menu__item">
            <RouterLink to="/about-us">
              <span>about us</span>
            </RouterLink>
          </li>
          <li class="menu__item">
            <RouterLink to="/address">
              <span>address</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/">
              <img
                class="logo"
                src="https://res.cloudinary.com/dvmthwuhj/image/upload/v1700012395/Camelia/Icons/logo_eqiw9w.png"
                alt=""
              />
            </RouterLink>
          </li>
          <li class="menu__item">
            <RouterLink to="/blog">
              <span>blog</span>
            </RouterLink>
          </li>
          <li class="menu__item">
            <RouterLink to="/membership">
              <span>membership</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.menu {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  @media (max-width: 860px) {
    border-top: 1px solid #ccc;
  }
  &__list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;
  }
  &__item {
    span {
      text-transform: uppercase;
      transition: all 0.25s linear;
      color: #000000;
    }
    &.active,
    &:hover {
      span {
        color: rgb(214, 28, 31);
      }
    }
    .router-link-active {
      span {
        color: rgb(214, 28, 31);
      }
    }
  }
  .logo {
    width: 15rem;
    @media (max-width: 620px) {
      width: 12rem;
    }
  }
}
</style>
