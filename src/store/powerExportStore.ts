import { ColumnItemModel, ListItemModel } from "@/models/powerExportModels";

export interface PowerExportStateModel {
  columns: ColumnItemModel[];
  lists: ListItemModel[];
}

export default {
  state: {
    columns: [],
    lists: [],
  },
  getters: {
    getColumns: (state: PowerExportStateModel) => state.columns,
    getLists: (state: PowerExportStateModel) => state.lists,
  },
  mutations: {
    setColumns(state: PowerExportStateModel, data: ColumnItemModel[]) {
      state.columns = data;
    },
    setLists(state: PowerExportStateModel, data: ListItemModel[]) {
      state.lists = data;
    },
  },
};
