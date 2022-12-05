export interface MainStoreModel {
  percentage: number;
  isLoading: boolean;
}

export default {
  state: {
    percentage: 80,
    isLoading: true,
  },
  getters: {
    getPercentage: (state: MainStoreModel) => state.percentage,
    getIsLoading: (state: MainStoreModel) => state.isLoading,
  },
  mutations: {
    setPercentage(state: MainStoreModel, data: number) {
      state.percentage = data;
    },
    setIsLoading(state: MainStoreModel, data: boolean) {
      state.isLoading = data;
    },
  },
};
