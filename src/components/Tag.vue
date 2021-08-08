<template>
  <div class="tag" :class="{ tag_active: active }">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.tag {
  padding: 6px 12px;

  border-radius: 50px;

  font-weight: 400;

  color: #000;
  background: #EEF0F2;

  transition: 0.3s linear;

  margin-left: 1em;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    cursor: pointer;
  }

  &_active {
    color: #fff;
    background: linear-gradient(to right, #FF4F4F, #DC3131);
  }
}
</style>