<template>
  <div class="calculated-item">
    <InputCheck :id="id" class="calculated-item__checkbox" />
    <span class="calculated-item__money">78 000 рублей</span>
    <span class="calculated-item__year"> в 1-ый год</span>
  </div>
</template>

<script>
import InputCheck from "@/components/InputCheck.vue";

export default {
  props: {
    id: Number,
  },
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
