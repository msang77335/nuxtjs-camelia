<template>
  <div class="about page-content">
    <div class="container">
      <h2 class="name">GIỚI THIỆU</h2>
      <div class="top">
        <h4 class="title">Welcome to Camelia</h4>
        <p class="des">
          &quot;Camelia puts its heart and soul into every product, giving
          people minimalism from the smallest things.&quot;
        </p>
      </div>
      <div class="center">
        <p class="des">
          &emsp;&emsp;&nbsp;Chắc hẳn chúng ta đều đã và đang gặp phải những rắc
          rối nhỏ nhặt trong cuộc sống hằng ngày từ việc túi áo quần bị quá tải
          bởi nhiều vật dụng cho tới việc chìa khóa, tai nghe điện thoại bị thất
          lạc trong chính chiếc balo, túi xách mà chúng ta bỏ vào một cách lộn
          xộn. Nhưng rồi chúng ta dần cho đó là thói quen và sống chung với
          những vấn đề &quot;nhỏ nhặt&quot; này...
        </p>
        <p class="des">
          &emsp;&emsp;&nbsp;Với thông điệp &quot;More than Simplicity&quot;,
          Camelia dành trọn tâm huyết để làm ra các sản phẩm của mình. Không chỉ
          là sự đơn giản ở thiết kế bên ngoài giúp cho người dùng đỡ mất thời
          gian suy nghĩ đến việc lựa chọn quần áo phù hợp, mà thiết kế bên trong
          của mỗi sản phẩm đều được chăm chút, tinh gọn nhằm tạo ra sự tiện lợi
          và ngăn nắp cho người sử dụng.
        </p>
        <p class="des">
          &emsp;&emsp;&nbsp;Hãy trải nghiệm và cảm nhận sự thay đổi của bản thân
          bạn cùng với Camelia nhé!
        </p>
        <div class="image">
          <img
            src="https://res.cloudinary.com/dvmthwuhj/image/upload/v1700010730/Camelia/Pages/ll_9e4d431b90a94b42b2b56f8aedd701fc_grande_n7tg8e.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="bottom">
        <h4 class="title">Have a good day!</h4>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about {
  padding-top: 2rem;
}
.name {
  text-transform: uppercase;
  font-size: 2.3rem;
  color: #333333;
}
.des {
  color: #000000;
  margin: 1.5rem 0;
  line-height: 1.45;
}
.title {
  margin-bottom: 2rem;
  font-weight: 700;
  @media (max-device-width: 1024px) {
    font-family: "FuturaBold";
    font-weight: 400;
  }
}
.image {
  margin: 0 auto;
  max-width: 60rem;
}
.top {
  text-align: center;
  margin-top: 3rem;
  .title {
    font-size: 2.6rem;
  }
}
.center {
  border-top: 0.5px solid #000;
  border-bottom: 0.5px solid #000;
  margin: 3rem 0;
  padding: 2.5rem 0;
}
.bottom {
  text-align: center;
  padding-bottom: 4rem;
  .title {
    font-size: 2rem;
  }
}
</style>
