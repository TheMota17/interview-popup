<template>
  <button class="add-button">
    <div class="add-button__background"></div>
    <div class="add-button__text">{{ text }}</div>
  </button>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.add-button {
  width: 100%;

  position: relative;
  z-index: 1;

  margin-top: 40px;
  padding: 16px 0px;

  font-size: 16px;
  font-weight: 500;

  border-radius: 6px;
  outline: none;
  border: none;

  color: #fff;
  background: linear-gradient(to right, #FF4F4F, #DC3131);
  box-shadow: 0px 0px 24px #FF4F4F;

  transition: 0.3s linear;

  cursor: pointer;

  &__background {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    opacity: 0;

    border-radius: inherit;

    transition: opacity 0.3s linear;

    background: #EA0029;
  }

  &__text {
    width: 100%;
    height: 100%;

    position: relative;
    z-index: 3;
  }

  &:hover:enabled &__background {
    opacity: 1;
  }

  &:disabled {
    box-shadow: none;

    background: #BEC5CC;
  }
}
</style>