<template>
  <div class="popup-wrapper" :class="{ 'popup-wrapper_active': active }">
    <div class="popup">
      <button @click="$emit('popup-close')" class="popup__close-btn">
        <i class="bi bi-type-bold bi-x-lg"></i>
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
        <p class="popup__text-btn">
          <a href="#">Рассчитать</a>
        </p>
        <div class="popup__calculated">
          <p class="popup__bold-text">
            Итого можете внести в качестве досрочных:
          </p>
          <CalculatedItem :key="1" :id="1" />
          <CalculatedItem :key="2" :id="2" />
          <CalculatedItem :key="3" :id="3" />
          <CalculatedItem :key="4" :id="4" />
        </div>
      </div>
      <div class="popup__sort">
        <p class="popup__sort-title">Что уменьшаем?</p>
        <Tag
          @click="sortBy = 'payment'"
          :active="sortBy === 'payment'"
          text="Платеж"
        />
        <Tag @click="sortBy = 'term'" :active="sortBy === 'term'" text="Срок" />
      </div>
      <AddButton text="Добавить" />
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Tag from "@/components/Tag.vue";
import AddButton from "@/components/AddButton.vue";
import CalculatedItem from "@/components/CalculatedItem.vue";

export default {
  props: {
    active: Boolean,
  },
  components: {
    Input,
    Tag,
    AddButton,
    CalculatedItem,
  },
  data: () => ({
    input: {
      invalid: false,
    },
    sortBy: "payment", // or "term"
  }),
};
</script>

<style lang="scss" scoped>
.popup-wrapper {
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  display: none;

  opacity: 1;

  background: #B3B3B3;

  &_active {
    display: block;
    animation: 1s popup-wrapper_active 1;
  }
}

.popup {
  width: 100%;
  max-width: 500px;

  position: relative;

  margin: 120px auto 0 auto;
  padding: 2.5em;

  border-radius: 30px;

  background: #fff;

  transition: 0.3s linear;

  &__close-btn {
    width: 18px;
    height: 18px;

    position: absolute;
    top: 0;
    right: 0;

    font-size: 1.2em;
    font-weight: bold;

    margin-top: 2em;
    margin-right: 2em;

    display: flex;
    justify-content: center;
    align-items: center;

    background: none;
    color: #EA0029;

    border: none;
    outline: none;

    background: url("/assets/css/icons/exit.svg") no-repeat top/cover;

    cursor: pointer;
  }

  &__title {
    font-size: 2em;
    font-weight: 500;
  }

  &__info {
    color: #808080;

    margin-top: 16px;
  }

  &__bold-text {
    font-weight: 500;
  }

  &__calculation {
    margin-top: 1.8em;
  }

  &__calculated {
    margin-top: 16px;
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

  &__sort {
    display: flex;
    align-items: center;

    margin-top: 30px;
  }

  &__sort-title {
    margin-right: 3em;
    font-weight: 500;
  }
}

@keyframes popup-wrapper_active {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 500px) {
  .popup {
    margin: 0;

    border-radius: 0;

    &__title {
      font-size: 1.5em;
    }
  }
}
</style>
