<template>
  <form class="calculate-form">
    <input
      class="calculate-input"
      :class="{ 'calculate-input_invalid': inputInvalid }"
      v-model.lazy="money"
      v-money3="moneyMask"
      type="text"
      :placeholder="placeholderText"
    />
    <span
      class="calculate-error"
      :class="{ 'calculate-error_active': inputInvalid }"
    >
      {{ errorText }}
    </span>
    <p class="calculate-form__text-btn">
      <a href="#" @click="calculate">Рассчитать</a>
    </p>
  </form>
</template>

<script>
import MoneyMask from "@/mixins/moneyMask.mixin.js";
import Validators from "@/mixins/validators.mixin.js";

export default {
  props: {
    invalid: Boolean,
    placeholderText: String,
    errorText: String,
  },
  mixins: [MoneyMask, Validators],
  data: () => ({
    money: "0 ₽",
  }),
  computed: {
    originalMoney() {
      return this.money
        .split(" ")
        .filter((elem) => !isNaN(Number(elem)))
        .join("");
    },
  },
  methods: {
    calculate() {
      const money = this.originalMoney;

      if (money < 1000) {
        return;
      }

      const moneyOfYear = Math.floor(Number(money) * 12 * 0.13);
      const remains = 260000 % moneyOfYear;
      const yearsQuantity = (260000 - remains) / moneyOfYear;

      const calculatedData = [];

      for (let i = 0; i < yearsQuantity; ++i) {
        calculatedData.push({
          money: moneyOfYear,
          year: i + 1,
        });
      }

      if (remains > 0) {
        calculatedData.push({
          money: remains,
          year: calculatedData.length + 1,
        });
      }

      this.$emit("calculate", calculatedData);
    },
  },
};
</script>

<style lang="scss" scoped>
.calculate-form {
  margin-top: 8px;

  &__text-btn {
    margin-top: 8px;

    a {
      color: #EA0029;

      font-weight: 500;
      text-decoration: none;

      transition: 0.1s linear;

      &:hover {
        color: #F53A31;
      }

      &:active {
        color: #EA0029;
      }
    }
  }
}

.calculate-input {
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

.calculate-error {
  display: none;

  font-size: 10px;

  color: #EA0029;

  margin-top: 4px;

  &_active {
    display: block;
  }
}
</style>