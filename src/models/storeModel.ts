import { MainStoreModel } from "@/store/mainStore";
import { PowerExportStateModel } from "@/store/powerExportStore";

export interface storeModel {
  mainStore: MainStoreModel;
  powerExportStore: PowerExportStateModel;
}
