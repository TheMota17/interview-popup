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
        <CalculateForm
          @calculate="changeCalculatedData"
          placeholder-text="Введите данные"
          error-text="Минимальная зарплата 1000 ₽"
        />
        <div v-if="calculatedData.length" class="popup__calculation-body">
          <p class="popup__bold-text">
            Итого можете внести в качестве досрочных:
          </p>
          <div class="popup__calculation-list">
            <CalculatedItem
              v-for="(calculatedItem, idx) of sortedCalculatedData"
              :key="idx"
              :id="idx"
              :money="calculatedItem.money"
              :year="calculatedItem.year"
            />
          </div>
        </div>
      </div>
      <div class="popup__sort">
        <p class="popup__sort-title">Что уменьшаем?</p>
        <div class="popup__sort-tags">
          <Tag
            @click="changeSort('payment')"
            :active="sortBy === 'payment'"
            text="Платеж"
          />
          <Tag
            @click="changeSort('term')"
            :active="sortBy === 'term'"
            text="Срок"
          />
        </div>
      </div>
      <AddButton text="Добавить" />
    </div>
  </div>
</template>

<script>
import CalculateForm from "@/components/CalculateForm.vue";
import Tag from "@/components/Tag.vue";
import AddButton from "@/components/AddButton.vue";
import CalculatedItem from "@/components/CalculatedItem.vue";

export default {
  props: {
    active: Boolean,
  },
  components: {
    CalculateForm,
    Tag,
    AddButton,
    CalculatedItem,
  },
  data: () => ({
    sortBy: "payment", // or "term"
    calculatedData: [],
  }),
  methods: {
    changeCalculatedData(calculatedData) {
      this.calculatedData = calculatedData;
    },
    changeSort(sortBy) {
      this.sortBy = sortBy;
    },
    sortCalculatedData() {
      switch (this.sortBy) {
        case "payment":
          this.calculatedData.sort((prev, next) => next.money - prev.money);
          break;
        case "term":
          this.calculatedData.sort((prev, next) => next.year - prev.year);
          break;
        default:
          return;
      }
    },
  },
  computed: {
    sortedCalculatedData() {
      this.sortCalculatedData();

      return this.calculatedData;
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-wrapper {
  width: 100%;
  min-height: 100%;

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
  max-width: 550px;

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

  &__calculation-body {
    margin-top: 16px;
  }

  &__calculation-list {
    max-height: 250px;
    overflow-y: scroll;
  }

  &__sort {
    display: flex;
    align-items: center;

    margin-top: 30px;
  }

  &__sort-tags {
    display: flex;
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
    height: 100%;

    margin: 0;

    border-radius: 0;

    &__title {
      font-size: 1.5em;
    }

    &__sort {
      margin-top: 24px;

      display: block;
    }

    &__sort-tags {
      margin-top: 30px;
    }
  }
}
</style>
