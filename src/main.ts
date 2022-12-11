import { createApp } from "vue";
import App from "./App.vue";
// VSCode extension "TypeScript Vue Plugin (Volar)" must be disabled or "typescript-plugin-css-modules" will not work properly.
// After doing that, TypeScript will show error that cannot import the Vue files.
import eases from "@/assets/styles/eases.module.scss";
// this works fine. (When disable "TypeScript Vue Plugin (Volar)".)

console.log("console log eases from main.ts", eases);

createApp(App).mount("#app");
