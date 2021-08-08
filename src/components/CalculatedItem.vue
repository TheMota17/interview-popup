<template>
  <div class="calculated-item">
    <InputCheck :id="id" class="calculated-item__checkbox" />
    <div class="calculated-item__info">
      <span class="calculated-item__money">{{ formatMoney }} рублей </span>
      <span>в {{ year }}-ый год</span>
    </div>
  </div>
</template>

<script>
import MoneyMaskInline from "@/mixins/moneyMaskInline.mixin.js";

import InputCheck from "@/components/InputCheck.vue";

export default {
  props: {
    id: Number,
    money: Number,
    year: Number,
  },
  mixins: [MoneyMaskInline],
  components: {
    InputCheck,
  },
};
</script>

<style lang="scss" scoped>
.calculated-item {
  padding: 20px 0;

  font-weight: 400;

  border-bottom: 1px solid #DFE3E6;

  display: flex;
  align-items: center;

  &__checkbox {
    margin-right: 14px;
  }

  &__money {
    font-weight: 500;
  }
}
</style>
