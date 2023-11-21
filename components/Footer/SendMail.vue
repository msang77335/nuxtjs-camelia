<template>
  <form class="form">
    <input
      class="form__input"
      type="text"
      placeholder="Nhập email của bạn..."
    />
    <button class="form__submit" type="button">
      <font-awesome-icon class="icon" :icon="['fa', 'paper-plane']" />
    </button>
  </form>
</template>

<style scoped lang="scss">
.icon {
  width: 2rem;
  height: 2rem;
  color: #ffffff;
}

.form {
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.3rem 0.3rem 1rem;
  width: 65%;
  margin: 0 auto 2rem;
  background-color: #ffff;
  @media (max-width: 650px) {
    width: 100%;
  }
  &__input {
    width: 60%;
    border: none;
  }
  &__submit {
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 3px;
    background-color: #545457;
    transition: all 0.25s linear;
    &:hover {
      background-color: #d61c1f;
    }
    a {
    }
  }
}
</style>
