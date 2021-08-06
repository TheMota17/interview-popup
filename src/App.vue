<template>
  <main>
    <FirstButton text="Досрочный платеж" />
    <popup />
  </main>
</template>

<script>
import FirstButton from "@/components/FirstButton.vue";
import Popup from "@/components/Popup.vue";

export default {
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
