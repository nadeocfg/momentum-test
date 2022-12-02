import { Vue } from "vue-class-component";

export default class App extends Vue {
  mounted() {
    console.log(this.$route);
  }
}
