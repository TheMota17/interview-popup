<template>
  <main>
    <FirstButton
      @click="popup.active = !popup.active"
      text="Досрочный платеж"
    />
    <popup @popup-close="popup.active = !popup.active" :active="popup.active" />
  </main>
</template>

<script>
import FirstButton from "@/components/FirstButton.vue";
import Popup from "@/components/Popup.vue";

export default {
  data: () => ({
    popup: {
      active: true,
    },
  }),
  components: {
    FirstButton,
    Popup,
  },
};
</script>

<style scoped>
main {
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(to right, #FF4F4F, #DC3131);
}
</style>
