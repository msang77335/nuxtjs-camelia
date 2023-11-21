<template>
  <div class="wrapper categories">
    <div class="container">
      <ul class="categories__list">
        <li
          v-for="category in categories"
          :key="category.title"
          class="categories__item"
        >
          <RouterLink :to="category.link">
            <div class="img-wrapper">
              <img class="img-no-hover" :src="category.image" alt="" />
              <img class="img-hover" :src="category.imageHighlight" alt="" />
            </div>
            <p class="name">{{ category.title }}</p></RouterLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = [
  {
    title: "Backpacks",
    link: "/collections/backpacks",
    image:
      "https://res.cloudinary.com/dvmthwuhj/image/upload/v1700012393/Camelia/Icons/baloden_szbeew.svg",
    imageHighlight:
      "https://res.cloudinary.com/dvmthwuhj/image/upload/v1700012394/Camelia/Icons/balodo_w5jcgj.svg",
  },
  {
    title: "Wallets",
    link: "/collections/wallets",
    image:
      "https://res.cloudinary.com/dvmthwuhj/image/upload/v1700012401/Camelia/Icons/viden_1_vj999r.svg",
    imageHighlight:
      "https://res.cloudinary.com/dvmthwuhj/image/upload/v1700012405/Camelia/Icons/vido_1_bjlkmd.svg",
  },
  {
    title: "Tote & Accessories",
    link: "/collections/accessories",
    image:
      "https://res.cloudinary.com/dvmthwuhj/image/upload/v1700012401/Camelia/Icons/viden_1_vj999r.svg",
    imageHighlight:
      "https://res.cloudinary.com/dvmthwuhj/image/upload/v1700012405/Camelia/Icons/vido_1_bjlkmd.svg",
  },
  {
    title: "Crossbody bags",
    link: "/collections/crossbody-bags",
    image:
      "https://res.cloudinary.com/dvmthwuhj/image/upload/v1700012396/Camelia/Icons/tuicheoden_lumejw.svg",
    imageHighlight:
      "https://res.cloudinary.com/dvmthwuhj/image/upload/v1700012399/Camelia/Icons/tuicheodo_crweuy.svg",
  },
];
</script>

<style scoped lang="scss">
.categories {
  padding: 0.5rem;
  border: 1px solid #ccc;

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 650px) {
      flex-wrap: wrap;
    }
  }

  &__item {
    padding: 0 0.3rem;
    width: 20rem;
    text-align: center;
    border-right: 1px solid #eee;
    .name {
      transition: all 0.15s linear;
      text-align: center;
      color: #333333;
      line-height: 1.6;
    }
    .img {
      width: 6rem;
      height: 6rem;
      &-wrapper {
        position: relative;
        transition: all 0.25s linear;
        display: inline-block;
      }
      &-no-hover,
      &-hover {
        width: 6rem;
        height: 6rem;
      }
      &-hover {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
      }
    }

    &:first-of-type {
      .img {
        &-no-hover,
        &-hover {
          width: 4rem;
        }
      }
    }
    &:last-of-type {
      border-right-color: transparent;
    }
    &:hover {
      .img {
        &-no-hover {
          opacity: 0;
        }
        &-hover {
          opacity: 1;
        }
      }
      .name {
        color: rgb(214, 28, 31);
      }
    }
    @media (max-width: 650px) {
      padding: 1rem 0;
      border-bottom: 1px solid #eee;
      &:nth-of-type(2) {
        border-right-color: transparent;
      }
      &:nth-of-type(3),
      &:nth-of-type(4) {
        border-bottom-color: transparent;
      }
    }
  }
}
</style>
