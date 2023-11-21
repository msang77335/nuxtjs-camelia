<template>
  <div class="top">
    <div class="container header-container">
      <div class="left">
        <NuxtLink to="/">
          <span class="link">
            <span> Camelia Brand</span>
            <font-awesome-icon
              :icon="['far', 'registered']"
              class="icon-registered"
            />
          </span>
        </NuxtLink>
        <button class="btn" @click="isShowCate = true">
          <font-awesome-icon :icon="['fa', 'bars']" class="icon-bars" />
        </button>
        <button class="btn" @click="isShowSearch = true">
          <font-awesome-icon :icon="['fa', 'search']" class="icon-search" />
        </button>
      </div>
      <NuxtLink to="/">
        <img
          class="logo"
          src="https://res.cloudinary.com/dvmthwuhj/image/upload/v1700012395/Camelia/Icons/logo_eqiw9w.png"
          alt=""
        />
      </NuxtLink>
      <div class="right">
        <NuxtLink to="callto:19001052">
          <span class="link link-phone">
            <font-awesome-icon
              :icon="['fa', 'phone']"
              class="icon-phone"
            /> </span
        ></NuxtLink>
        <NuxtLink to="callto:19001052">
          <span class="link">
            <font-awesome-icon :icon="['fa', 'phone']" class="icon-phone" />
            <p>0123456789</p>
          </span></NuxtLink
        >
        <NuxtLink to="mailto:thecameliavn@gmail.com">
          <span class="link link-email">
            <font-awesome-icon
              :icon="['fa', 'envelope']"
              class="icon-envelope"
            />
            <p>thecameliavn@gmail.com</p></span
          ></NuxtLink
        >
        <div class="search-box">
          <SearchBox />
        </div>
        <IcCart />
      </div>
    </div>
  </div>
  <div class="bottom">
    <div class="container header-container">
      <NuxtLink to="mailto:thecameliavn@gmail.com">
        <span class="link link-email">
          <font-awesome-icon :icon="['fa', 'envelope']" class="icon-envelope" />
          <p>thecameliavn@gmail.com</p></span
        ></NuxtLink
      >
      <SearchBox />
    </div>
  </div>
  <SideBarSearch :is-show="isShowSearch" @on-close="isShowSearch = false" />
  <SideBarCate :is-show="isShowCate" @on-close="isShowCate = false" />
</template>

<script setup lang="ts">
import IcCart from "./IcCart.vue";
import SearchBox from "./SearchBox.vue";
import SideBarCate from "./SideBarCate.vue";
import SideBarSearch from "./SideBarSearch.vue";

const isShowSearch = useState<boolean>("isShowSearch", () => false);
const isShowCate = useState<boolean>("isShowCate", () => false);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-device-width: 520px) {
    padding: 0.7rem 1.5rem;
  }
}
.icon {
  &-search {
    width: 2rem;
    height: 2rem;
    color: #7b7979;
  }
  &-bars {
    width: 2rem;
    height: 2rem;
    color: #7b7979;
  }
  &-registered {
    color: #000000;
    margin-left: 0.5rem;
    width: 1.1rem;
    height: 1.1rem;
  }
  &-envelope {
    color: rgb(214, 28, 31);
    transition: all 0.25s linear;
    margin-right: 0.5rem;
    width: 1.4rem;
    height: 1.4rem;
  }
  &-phone {
    color: rgb(214, 28, 31);
    transition: all 0.25s linear;
    margin-right: 0.5rem;
    width: 1.4rem;
    height: 1.4rem;
    @media (max-width: 520px) {
      width: 2rem;
      height: 2rem;
      color: #7b7979;
    }
  }
}
.link {
  color: #333333;
  transition: all 0.25s linear;
  outline: none;
  display: flex;
  align-items: center;
  &:hover {
    color: rgb(214, 28, 31);
  }
  &-phone {
    margin-top: 0.5rem;
    transform: rotate3d(0, 1, 0, 180deg);
  }
  &-email {
    margin-right: 1.5rem;
  }
}
.top {
  background-color: rgb(245, 245, 245);
  border-bottom: 1px solid #f0ebeb;
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  z-index: 99;
}
.bottom {
  padding: 1rem 0;
  display: none;
  @media (max-width: 860px) {
    display: block;
  }
  @media (max-width: 520px) {
    display: none;
  }
}
.btn {
  display: none;
  border: none;
  background-color: transparent;
  padding: 0;
  margin-right: 1rem;

  @media (max-width: 520px) {
    display: flex;
    align-items: center;
  }
}
.left {
  @media (max-width: 520px) {
    display: flex;
    .link {
      display: none;
    }
  }
}
.right {
  display: flex;
  align-items: center;
  .link {
    margin-right: 2rem;
    &-phone {
      color: #333333;
      display: none;
      .icon {
        font-size: 2rem;
        color: #7b7979;
      }
    }
  }
  @media (max-width: 860px) {
    .link {
      margin-right: 0.5rem;
      &-email {
        display: none;
      }
    }
  }
  @media (max-width: 520px) {
    .link {
      display: none;
      &-phone {
        display: block;
      }
    }
  }
}
.search-box {
  @media (max-width: 860px) {
    display: none;
  }
}
.logo {
  width: 8rem;
  height: 3rem;
  display: none;
  @media (max-width: 520px) {
    display: block;
  }
}
</style>
