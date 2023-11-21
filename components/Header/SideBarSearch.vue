<template>
  <div class="side-bar" :class="{ show: isShow }">
    <div class="content">
      <div class="content-top">
        <h4 class="label" as="h4">tiềm kiếm</h4>
        <button class="btn-close" @click="handleClose" />
      </div>
      <div class="search-box">
        <form class="search-form">
          <input
            class="search-input"
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
          />
          <NuxtLink :to="`/search?products=`" pass-href="{true}">
            <button class="search-submit">
              <font-awesome-icon :icon="['fa', 'search']" class="icon-search" />
            </button>
          </NuxtLink>
        </form>
        <div>
          <div class="result">
            <!-- {resultList.length > 0 ? (
                              <s.ResultList>
                                 {resultList.map((result, i) => {
                                    if (i < 4) {
                                       return (
                                          <SideBarSearchResultItem
                                             key={i}
                                             product={result}
                                             on-click={handleClickResutlItem}
                                          />
                                       );
                                    }
                                 })}
                                 {resultList.length > 4 && (
                                    <s.SeeMore>
                                       <Link href={`/search?products=${value}`}>
                                          <a onClick={handleClickSearch}>
                                             Xem Thêm {resultList.length - 4}{" "}
                                             sản phẩm
                                          </a>
                                       </Link>
                                    </s.SeeMore>
                                 )}
                              </s.ResultList>
                           ) : isFetching ? (
                              <s.Text>Đang tìm kiếm...</s.Text>
                           ) : (
                              <s.Text>Không có sản phẩm phù hợp...</s.Text>
                           )} -->
          </div>
        </div>
      </div>
    </div>
    <div class="background" />
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
defineProps({
  isShow: { type: Boolean, required: true },
});
const emits = defineEmits(["onClose"]);

const handleClose = () => {
  emits("onClose");
};
</script>

<style scoped lang="scss">
.icon-search {
  color: #c1c1c1;
  width: 1.7rem;
  height: 1.7rem;
}
.content {
  width: 30rem;
  height: 100vh;
  padding: 4rem 2rem;
  position: fixed;
  z-index: 200;
  top: 0;
  background-color: #ffffff;
  transition: all 0.25s ease-in-out;
  &-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.label {
  text-transform: uppercase;
  color: #555555;
}
.search {
  &-box {
    position: relative;
    margin-top: 5rem;
  }
  &-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: #f5f4f4;
    border-radius: 2px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1.5rem;
      width: 100%;
      border-bottom: 1px dotted #c1c1c1;
    }
  }
  &-input {
    border: none;
    background-color: #f5f4f4;
    font-family: "Futura", sans-serif;
    color: #000000;
    width: 90%;
    &::placeholder {
      font-family: "Futura", sans-serif;
      color: #c1c1c1;
    }
  }
  &-submit {
    color: #c1c1c1;
    background-color: transparent;
    border: none;
  }
}
.result {
  position: absolute;
  width: 100%;
  &-list {
    margin-top: 0.5rem;
    background-color: #ffffff;
  }
  &-item {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px dotted #c1c1c1;
    transition: all 0.25s linear;
    &:hover {
      background-color: #f5f4f4;
    }
  }
}

/* export const SeeMore = styled.div`
   padding: 2rem;
   text-align: center;
   a {
      color: #d61c1f;
   }
`; */

/* export const Image = styled.div`
   margin-right: 1rem;
`; */

/* export const Info = styled.div`
   font-weight: 700;
   font-size: 1.2rem;
`; */

/* export const Name = styled.p`
   margin-bottom: 0.7rem;
   text-transform: capitalize;
   color: #333333;
   @media (max-device-width: 1024px) {
      font-family: "FuturaBold";
      font-weight: 400;
   }
`; */

/* export const Price = styled.p`
   color: #d61c1f;
   @media (max-device-width: 520px) {
      font-family: "FuturaBold";
      font-weight: 400;
   }
`; */

/* export const Text = styled.p`
   margin-top: 0.5rem;
   padding: 1.5rem 1rem;
   color: #666666;
   border-radius: 3px;
   box-shadow: 0 1px 3px 0 #7d7d7d;
   background-color: #ffffff;
`; */

/* export const PriceUnit = styled.span`
   text-decoration: underline;
`; */
.btn-close {
  position: relative;
  width: 3rem;
  height: 3rem;
  border: none;
  background-color: transparent;
  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 0.05rem;
    background-color: #333333;
  }
  &::after {
    transform: translateY(-50%) rotate(45deg);
  }
  &::before {
    transform: translateY(-50%) rotate(-45deg);
  }
}
.background {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.25s ease-in-out;
}
.side-bar {
  opacity: 1;
  transition: all 0.25s ease-in-out;
  @media (min-width: 520px) {
    opacity: 0;
    visibility: hidden;
  }
  .content {
    left: -30rem;
  }
  .background {
    opacity: 0;
    visibility: hidden;
  }
  &.show {
    .content {
      left: 0rem;
    }
    .background {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
