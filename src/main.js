import Vue from "vue";

Vue.config.productionTip = false;

const DEFAULT_TARGET = {
  name: "app",
  path: "./App.vue"
};

const BUILD_TARGETS = [
  DEFAULT_TARGET,
  {
    name: "test",
    path: "./Test.vue"
  }
];

const { path } = process.env.VUE_APP_BUILD_TARGET
  ? BUILD_TARGETS.find(({ name }) => process.env.VUE_APP_BUILD_TARGET === name)
  : DEFAULT_TARGET;

import(`${path}`).then(({ default: App }) =>
  new Vue({
    render: h => h(App)
  }).$mount("#app")
);
