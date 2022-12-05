<template>
  <n-grid class="power-export" :x-gap="12" :cols="12">
    <n-gi span="12">
      <n-select
        v-model:value="selectedColumns"
        multiple
        :options="columns"
        placeholder="Select columns for export"
        label-field="label"
        value-field="id"
      />
    </n-gi>
  </n-grid>
  <n-grid class="power-export" :x-gap="12" :cols="12">
    <n-gi span="8">
      <n-select
        v-model:value="selectedList"
        :options="lists"
        placeholder="Select previously saved layout"
        label-field="name"
        value-field="id"
        :on-update:value="onChangeList"
      />
    </n-gi>
    <n-gi span="4">
      <n-checkbox v-model:checked="isSaveList"> Save layout </n-checkbox>
    </n-gi>
  </n-grid>

  <div class="power-export">
    <button class="button-new add-item baby-button" :disabled="isLoading">
      Cancel
    </button>
    <button
      class="button-new add-item primary baby-button"
      :disabled="isLoading"
    >
      Export
    </button>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style scoped lang="scss">
.power-export {
  margin-top: 16px;
}
</style>
