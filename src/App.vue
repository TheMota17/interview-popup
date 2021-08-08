<template>
  <main>
    <popup @popup-close="popup.active = !popup.active" :active="popup.active" />
    <FirstButton
      @click="popup.active = !popup.active"
      text="Досрочный платеж"
    />
  </main>
</template>

<script>
import FirstButton from "@/components/FirstButton.vue";
import Popup from "@/components/Popup.vue";

export default {
  data: () => ({
    popup: {
      active: false,
    },
  }),
  components: {
    FirstButton,
    Popup,
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 500px) {
  .button {
    padding: 0.5em;
  }
}
</style>
