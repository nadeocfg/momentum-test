<template>
  <div class="loader" v-if="isLoading">
    <n-progress type="circle" :percentage="percentage" />
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style scoped lang="scss">
.loader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-content: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.5);
}
</style>
