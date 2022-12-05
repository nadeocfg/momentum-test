import { createStore } from "vuex";
import powerExport from "./powerExportStore";
import mainStore from "./mainStore";

export default createStore({
  modules: {
    mainStore,
    powerExport,
  },
});
