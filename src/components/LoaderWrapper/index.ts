import { storeModel } from "@/models/storeModel";
import { Vue } from "vue-class-component";

export default class LoaderWrapper extends Vue {
  // state
  percentage = 10;
  isLoading = false;

  mounted() {
    this.$store.watch(
      (state: storeModel) => {
        this.percentage = state.mainStore.percentage;
        this.isLoading = state.mainStore.isLoading;
      },
      {
        deep: true,
      }
    );
  }
}
