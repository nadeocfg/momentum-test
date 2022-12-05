// Init vue app
import { createApp } from "vue";
import App from "../App.vue";
import router from "../router";
import store from "../store";
import naive from "naive-ui";
import LoaderWrapper from "../components/LoaderWrapper/LoaderWrapper.vue";

// Check if .app-view-header.v2 element is rendered
const observer = new MutationObserver(function (mutations, mutationInstance) {
  // Create div element and append it to body tag
  const wrapper = document.querySelector(".app-view-header.v2");

  if (wrapper) {
    // const wrapper = document.querySelector("body");
    const div = document.createElement("div");
    div.setAttribute("id", "momentum-demo");

    if (wrapper) {
      wrapper.parentNode?.insertBefore(div, wrapper.nextSibling);
    }

    // Create App instance
    const app = createApp(App);

    // Use vue router
    app.use(router);

    // Use vue store
    app.use(store);

    // Use Naive UI liberary
    app.use(naive);

    // Loader component
    app.component("LoaderWrapper", LoaderWrapper);

    // Mount App
    app.mount("#momentum-demo");
    mutationInstance.disconnect();
  }
});

observer.observe(document, {
  childList: true,
  subtree: true,
});
