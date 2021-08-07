<template>
  <div class="input-wrapper">
    <input
      class="input"
      :class="{ input_invalid: invalid }"
      v-model="text"
      type="text"
      :placeholder="placeholderText"
    />
    <span class="input-error" :class="{ 'input-error_active': invalid }">
      {{ errorText }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    invalid: Boolean,
    placeholderText: String,
    errorText: String,
  },
  data: () => ({
    text: "",
  }),
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  margin-top: 8px;
}

.input-error {
  display: none;

  font-size: 10px;

  color: #EA0029;

  margin-top: 4px;

  &_active {
    display: block;
  }
}

.input {
  width: 100%;

  padding: 8px 10px;

  outline: none;
  border-radius: 3px;
  border: 1px solid #DFE3E6;

  transition: 0.3s linear;

  &:hover {
    border: 1px solid #000000;
  }

  &:focus {
    border: 1px solid #DFE3E6;
  }

  &_invalid {
    border: 1px solid #EA0029;
  }
}
</style>