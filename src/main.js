import Vue from "vue";

Vue.config.productionTip = false;

const BUILD_TARGETS = {
  app: "./App.vue",
  test: "./Test.vue"
};

const path = BUILD_TARGETS[process.env.VUE_APP_BUILD_TARGET] || "./App.vue";

import(`${path}`).then(({ default: App }) =>
  new Vue({
    render: h => h(App)
  }).$mount("#app")
);
