<template>
  <label class="input-check" :for="'input-check' + id">
    <div class="input-check__icon">
      <i class="bi bi-check-lg"></i>
    </div>
    <input
      class="input-check__input"
      type="checkbox"
      :id="'input-check' + id"
    />
  </label>
</template>

<script>
export default {
  props: {
    id: Number,
  },
};
</script>

<style lang="scss" scoped>
.input-check {
  width: 20px;
  height: 20px;

  cursor: pointer;

  position: relative;

  &__icon {
    position: absolute;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;

    i {
      font-size: 12px;

      width: 12px;
      height: 12px;
    }
  }

  &__input {
    appearance: none;

    width: 20px;
    height: 20px;

    border: 1px solid #DFE3E6;
    border-radius: 6px;
    outline: none;

    cursor: pointer;

    &:checked {
      background: linear-gradient(to right, #FF4F4F, #DC3131);
    }
  }
}
</style>