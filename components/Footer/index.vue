<template>
  <div class="footer">
    <div class="container footer-container">
      <div class="col">
        <div>
          <NuxtLink to="/">
            <h3 class="title">CAMELIA BRAND</h3>
          </NuxtLink>
          <ul>
            <li>
              <NuxtLink to="/address"
                ><span class="link">
                  <font-awesome-icon
                    class="icon icon-map-marker"
                    :icon="['fa', 'map-marker-alt']"
                  />
                  HCM: 633 Nguyễn Đình Chiểu, P.2, Q.3.</span
                ></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/address"
                ><span class="link">
                  <font-awesome-icon
                    class="icon icon-map-marker"
                    :icon="['fa', 'map-marker-alt']"
                  />
                  HCM: 174 Quang Trung, P.10, Gò Vấp.</span
                ></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="tel:19001052"
                ><span class="link">
                  <font-awesome-icon class="icon" :icon="['fa', 'phone']" />
                  0909140170</span
                ></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="mailto:thecameliavn@gmail.com"
                ><span class="link">
                  <font-awesome-icon class="icon" :icon="['fa', 'envelope']" />
                  thecameliavn@gmail.com</span
                ></NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="center">
          <h3 class="title">ĐĂNG KÝ NHẬN TIN</h3>
          <SendMail />
          <p>Cập nhật những sản phẩm mới nhất từ Camelia Brand nhé!</p>
          <ul class="media__list">
            <li class="media__item">
              <NuxtLink to="https://www.facebook.com/camelia.vn">
                <span class="link">
                  <font-awesome-icon
                    class="media-facebook"
                    :icon="['fab', 'facebook-f']"
                /></span>
              </NuxtLink>
            </li>
            <li class="media__item">
              <NuxtLink to="https://www.instagram.com/camelia.vn">
                <span class="link">
                  <font-awesome-icon
                    class="media-instagram"
                    :icon="['fab', 'instagram']"
                /></span>
              </NuxtLink>
            </li>
            <li class="media__item">
              <NuxtLink
                to="https://www.youtube.com/channel/UCwBs_NxpSwjgB7X-VCQ2myw?view_as=subscriber"
              >
                <span class="link">
                  <font-awesome-icon
                    class="media-youtube"
                    :icon="['fab', 'youtube']"
                /></span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="right">
          <h3 class="title">BẠN NÊN XEM</h3>
          <ul>
            <li>
              <NuxtLink to="/about-us">
                <span class="link">Giới thiệu</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/phuong-thuc-giao-hang">
                <span class="link">Phương thức giao hàng</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/phuong-thuc-thanh-toan">
                <span class="link">Phương thức thanh toán</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/chinh-sach-bao-hanh">
                <span class="link">Chính sách bảo hành</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/chinh-sach-doi-tra">
                <span class="link">Chính sách đổi trả</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/chinh-sach-bao-mat">
                <span class="link">Chính sách bảo mật</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom">
      <p>
        Copyrights © 2020 by
        <NuxtLink to="/">
          <span class="link"> Camelia Brand</span>
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import SendMail from "./SendMail.vue";
</script>

<style scoped lang="scss">
.footer {
  background-color: #212121;
  &-container {
    padding-top: 1.5rem;
    padding-bottom: 3rem;
    display: flex;
    flex-wrap: wrap;
  }
}
.title {
  font-size: 1.6rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: #c7572b;
  line-height: 3;
  @media (max-device-width: 1024px) {
    font-family: "FuturaBold";
    font-weight: 400;
  }
}
.link {
  line-height: 1.6;
  color: #999999;
  transition: all 0.25s linear;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  &:hover {
    color: #c7572b;
  }
}
.icon {
  font-size: 1.8rem;
  margin-right: 1rem;
  width: 1.5rem;
  color: #c7572b;
  vertical-align: sub;
  &-map-marker {
    font-size: 2rem;
  }
}
.media {
  &__list {
    margin-top: 1.5rem;
    justify-content: center;
    display: flex;
    font-size: 2rem;
  }
  &__item {
    margin: 1rem;
  }
  &-facebook {
    color: rgb(59, 89, 152);
  }
  &-youtube {
    color: rgb(255, 0, 0);
  }
  &-instagram {
    color: rgb(195, 42, 163);
  }
}
.center {
  color: #999999;
  text-align: center;
}
.right {
  .title {
    color: #999999;
  }
  @media (max-width: 650px) {
    .link-item {
      display: inline-block;
      width: 50%;
    }
  }
}
.bottom {
  padding: 5px 0px;
  border-top: 1px solid #484848;
  color: #999999;
  text-align: center;
  .link {
    display: inline-block;
    margin-bottom: 0;
  }
}
.col {
  &:nth-of-type(2) {
    width: 50%;
  }
  &:nth-of-type(1),
  &:nth-of-type(3) {
    width: 25%;
  }
  @media (max-width: 860px) {
    &:nth-of-type(1),
    &:nth-of-type(3) {
      width: 50%;
    }
    &:nth-of-type(1) {
      order: 3;
    }
    &:nth-of-type(3) {
      order: 2;
    }
    &:nth-of-type(2) {
      width: 100%;
      order: 1;
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 650px) {
    &:nth-of-type(1),
    &:nth-of-type(3) {
      width: 100%;
    }
  }
}
</style>
