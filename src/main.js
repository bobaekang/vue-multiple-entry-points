import Vue from "vue";

Vue.config.productionTip = false;

const BUILD_TARGETS = [
  {
    name: "app",
    path: "./App.vue"
  },
  {
    name: "test",
    path: "./Test.vue"
  }
];

const { path } = BUILD_TARGETS.find(
  ({ name }) => process.env.VUE_APP_BUILD_TARGET === name
);

import(`${path}`).then(({ default: App }) =>
  new Vue({
    render: h => h(App)
  }).$mount("#app")
);
