<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script> 

<style lang="scss" scoped>
.button {
  border: 1px solid #fff;
  outline: none;
  border-radius: 6px;

  padding: 1em;

  font-size: 16px;
  font-weight: 500;

  color: #fff;
  background: #FF5E56;

  transition: 0.3s linear;

  &:hover:enabled {
    cursor: pointer;

    color: #FF5E56;
    background: #fff;
  }

  &:disabled {
    cursor: default;

    border: none;

    background: #BEC5CC;
  }
}
</style>