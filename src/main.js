import { createApp } from "vue";
import App from "./App.vue";

import Money from "v-money3";

import "@/assets/css/style.scss";

createApp(App).use(Money).mount("#app");
