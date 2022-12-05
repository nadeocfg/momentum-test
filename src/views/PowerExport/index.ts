import { Vue } from "vue-class-component";
import { useMessage } from "naive-ui";
import { ColumnItemModel, ListItemModel } from "@/models/powerExportModels";
import api from "@/utils/api";

export default class PowerExport extends Vue {
  // state
  columns: ColumnItemModel[] = [];
  lists: ListItemModel[] = [];
  selectedColumns: string[] = [];
  selectedList: number | null = null;
  isSaveList = false;
  listName = "";

  message = useMessage();

  mounted() {
    const columns: ColumnItemModel[] = [];
    for (let i = 0; i < mockedColumns.length; i += 1) {
      mockedColumns[i].options.forEach((item) => {
        columns.push(item);
      });
    }
    this.columns = columns;

    const lists: ListItemModel[] = [];
    for (let i = 0; i < mockedLists.length; i += 1) {
      lists.push(mockedLists[i]);
    }
    this.lists = lists;

    this.$store.commit("setIsLoading", false);

    // api
    //   .get(
    //     `https://momentum-backend-staging.herokuapp.com/power_export/v1/apps/28039162/columns`
    //   )
    //   .then((data: any) => {
    //     this.columns = data.columns || [];
    //   })
    //   .catch(() => {
    //     this.message.error("Cannot get columns");
    //   });
  }

  onChangeList(value: number, listItem: ListItemModel) {
    this.selectedList = value;
    this.selectedColumns = listItem.columns;
  }

  onCancel() {
    this.selectedColumns = [];
    this.selectedList = null;
    this.isSaveList = false;
    this.listName = "";
  }

  onExport() {
    let count = 0;
    this.$store.commit("setPercentage", 0);
    this.$store.commit("setIsLoading", true);

    const interval = setInterval(() => {
      this.$store.commit("setPercentage", count);
      count += 20;

      if (count === 100) {
        clearInterval(interval);
        this.$store.commit("setPercentage", 0);
        this.$store.commit("setIsLoading", false);
        this.onCancel();
      }
    }, 1000);

    console.log("Export data");
  }
}

const mockedLists = [
  {
    id: 3,
    name: "test",
    columns: ["own_af_0_245525506", "own_af_0_245525507", "own_meta_0_itemid"],
  },
];

const mockedColumns = [
  {
    label: "Animals",
    options: [
      {
        id: "own_af_0_245525506",
        label: "Name",
      },
      {
        id: "own_af_0_245525507",
        label: "habitat",
      },
      {
        id: "own_af_0_245525508",
        label: "number of feet",
      },
      {
        id: "own_af_0_245525509",
        label: "wikipedia",
      },
      {
        id: "own_af_0_245525510",
        label: "retail price",
      },
      {
        id: "own_af_0_245525510_currency",
        label: "retail price (currency)",
      },
      {
        id: "own_meta_0_appitemid",
        label: "App item ID",
      },
      {
        id: "own_meta_0_itemid",
        label: "Podio ID",
      },
      {
        id: "own_meta_0_externalid",
        label: "External ID",
      },
      {
        id: "own_meta_0_revision",
        label: "revision ID",
      },
      {
        id: "own_meta_0_createdvia",
        label: "Created via (id)",
      },
      {
        id: "own_meta_0_createdvia_type",
        label: "Created via (type)",
      },
      {
        id: "own_meta_0_createdby",
        label: "Created by (id)",
      },
      {
        id: "own_meta_0_createdby_type",
        label: "Created by (type)",
      },
      {
        id: "own_meta_0_createdon",
        label: "Created on",
      },
      {
        id: "own_meta_0_lastactivity",
        label: "Last activity on",
      },
      {
        id: "own_meta_0_tags",
        label: "Tags",
      },
      {
        id: "own_meta_0_filecount",
        label: "File count",
      },
      {
        id: "own_meta_0_commentcount",
        label: "Comment count",
      },
    ],
  },
  {
    label: "Empty columns (used for spacing out fields)",
    options: [
      {
        id: "own_meta_0_blank_1",
        label: "Empty column",
      },
      {
        id: "own_meta_0_blank_2",
        label: "Empty column",
      },
      {
        id: "own_meta_0_blank_3",
        label: "Empty column",
      },
      {
        id: "own_meta_0_blank_4",
        label: "Empty column",
      },
      {
        id: "own_meta_0_blank_5",
        label: "Empty column",
      },
    ],
  },
];
