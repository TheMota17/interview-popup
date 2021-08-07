<template>
  <div class="popup-wrapper">
    <div class="popup">
      <button class="popup__close-btn">
        <span class="material-icons">close</span>
      </button>
      <h2 class="popup__title">Налоговый вычет</h2>
      <p class="popup__info">
        Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
        налогового вычета составляет не более 13% от своего официального
        годового дохода.
      </p>
      <div class="popup__calculation">
        <p class="popup__bold-text">Ваша зарплата в месяц</p>
        <Input
          :invalid="input.invalid"
          placeholder-text="Введите данные"
          error-text="Поле обязательно для заполнения"
        />
        <p class="popup__text-btn" @click="input.invalid = !input.invalid">
          <a href="#">Рассчитать</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";

export default {
  props: {
    active: Boolean,
  },
  components: {
    Input,
  },
  data: () => ({
    input: {
      invalid: false,
    },
  }),
};
</script>

<style lang="scss" scoped>
.popup-wrapper {
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #B3B3B3;
}

.popup {
  width: 500px;

  position: relative;

  padding: 2.5em;

  border-radius: 30px;

  background: #fff;

  &__close-btn {
    width: 18px;
    height: 18px;

    position: absolute;
    top: 0;
    right: 0;

    margin-top: 2em;
    margin-right: 2em;

    display: flex;
    justify-content: center;
    align-items: center;

    background: none;
    color: #EA0029;

    border: none;
    outline: none;
  }

  &__title {
    font-size: 28px;
    font-weight: 500;
  }

  &__info {
    color: #808080;

    margin-top: 16px;
  }

  &__bold-text {
    font-weight: 590;
  }

  &__calculation {
    margin-top: 1.8em;
  }

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
</style>
