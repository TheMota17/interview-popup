import { Vue, createApp } from "vue";
import App from "./App.vue";

import Money from "v-money3";

import "@/assets/css/style.scss";

const app = createApp(App);
app.use(Money);
app.mount("#app");
