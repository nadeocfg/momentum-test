import { createStore } from "vuex";
import powerExport from "./powerExportStore";

export default createStore({
  modules: {
    powerExport,
  },
});
