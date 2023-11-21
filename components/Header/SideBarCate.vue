<template>
  <div class="side-bar" :class="{ show: isShow }">
    <div class="side-bar-wrapper">
      <div class="content">
        <div class="top">
          <div class="logo">
            <NuxtLink href="/" class="link">
              <span>Camelia Brand</span>
              <font-awesome-icon
                :icon="['far', 'registered']"
                class="icon-registered"
              />
            </NuxtLink>
          </div>
          <ul class="category-list">
            <li
              v-for="category in categories"
              :key="category.title"
              class="category-item"
            >
              <NuxtLink :to="category.link">
                <div class="image-box">
                  <img class="image-not-hover" :src="category.image" alt="" />
                  <img
                    class="image-hover"
                    :src="category.imageHighlight"
                    alt=""
                  />
                </div>
                <p class="name">{{ category.title }}</p>
              </NuxtLink>
            </li>
          </ul>
          <ul class="menu-list">
            <li class="menu-item">
              <NuxtLink class="link" to="/about-us">about us</NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink class="link" to="/address">address</NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink class="link" to="/blog">blog</NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink class="link" to="/membership">membership</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="bottom">
          <NuxtLink href="callto:19001052" class="link">
            <font-awesome-icon :icon="['fa', 'phone']" class="icon-phone" />
            <p>0123456789</p>
          </NuxtLink>
          <NuxtLink href="mailto:thecameliavn@gmail.com" class="link">
            <font-awesome-icon
              :icon="['fa', 'envelope']"
              class="icon-envelope"
            />
            <p>thecameliavn@gmail.com</p>
          </NuxtLink>
        </div>
      </div>
      <button class="btn-close" @click="handleClose">
        <font-awesome-icon :icon="['fa', 'times']" class="icon-times" />
      </button>
    </div>

    <div class="background" />
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
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
defineProps({
  isShow: { type: Boolean, required: true },
});
const emits = defineEmits(["onClose"]);

const handleClose = () => {
  emits("onClose");
};
</script>

<style scoped lang="scss">
.icon {
  &-times {
    width: 1.7rem;
    height: 1.7rem;
  }
  &-registered {
    color: #000000;
    margin-left: 0.5rem;
    width: 1.1rem;
    height: 1.1rem;
    transition: all 0.25s linear;
  }
  &-envelope,
  &-phone {
    color: rgb(214, 28, 31);
    width: 1.2rem;
    height: 1.2rem;
  }
}
.background {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 0.25s ease-in-out;
}
.btn-close {
  background-color: #000000;
  width: 4.1rem;
  height: 4.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transition: all 0.25s ease-in-out;
  font-size: 1.6rem;
  border: none;
}
.link {
  color: #000000;
  transition: all 0.25s linear;
  &:hover {
    color: rgb(214, 28, 31);
  }
}
.logo {
  padding: 1.27rem;
  background-color: #dcdbdb;
}
.top {
  .link {
    display: flex;
    align-items: center;
    &:hover {
      .icon-registered {
        color: rgb(214, 28, 31);
      }
    }
  }
}
.bottom {
  display: flex;
  border-top: 1px solid #dcdbdb;
  a {
    padding-top: 0.5rem;
    width: 50%;
    border-right: 1px solid #dcdbdb;
    &:last-of-type {
      border-color: transparent;
    }
  }
  .link {
    text-align: center;
    padding: 0 0.5rem 0.5rem;
    font-size: 1.2rem;
    p {
      margin-top: 1rem;
    }
  }
}
.name {
  transition: all 0.15s linear;
  text-align: center;
  color: #333333;
  line-height: 1.6;
}
.image {
  &-box {
    position: relative;
    display: inline-block;
    img {
      width: 6rem;
      height: 6rem;
      transition: all 0.25s linear;
    }
  }
  &-hover {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
}
.category {
  &-list {
    padding: 1rem 0;
    display: flex;
    flex-wrap: wrap;
  }
  &-item {
    border-bottom: 1px solid #dcdbdb;
    border-right: 1px solid #dcdbdb;
    width: 50%;
    text-align: center;
    padding: 0.5rem;
    &:first-of-type {
      .image {
        &-not-hover,
        &-hover {
          width: 4rem;
        }
      }
    }
    &:nth-of-type(2),
    &:nth-of-type(4) {
      border-right-color: transparent;
    }
    &:nth-of-type(3),
    &:nth-of-type(4) {
      border-bottom-color: transparent;
    }
    &:hover {
      .image {
        &-not-hover {
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
  }
}
.menu {
  &-list {
    flex-direction: column;
  }
  &-item {
    .link {
      display: block;
      padding: 1rem;
      border-bottom: 1px solid #dcdbdb;
      /* color: ${(props: LinkProps) =>
      props.isActive ? "rgb(214, 28, 31)" : "#000000"}; */
      text-transform: uppercase;
      transition: all 0.25s linear;
      text-align: center;
      &:hover {
        color: rgb(214, 28, 31);
      }
    }
  }
}
.side-bar {
  opacity: 1;
  transition: all 0.25s ease-in-out;
  @media (min-width: 520px) {
    opacity: 0;
    visibility: hidden;
  }
  &-wrapper {
    width: 34.1rem;
    height: 100vh;
    position: fixed;
    z-index: 200;
    top: 0;
    transition: all 0.25s ease-in-out;
    display: flex;
    left: -34.1rem;
  }
  .content {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30rem;
  }
  .background {
    opacity: 0;
    visibility: hidden;
  }

  &.show {
    .side-bar-wrapper {
      left: 0;
    }
    .background {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
