<template>
  <div class="app">
    <n-message-provider>
      <router-view :key="$route.fullPath"></router-view>

      <LoaderWrapper />
    </n-message-provider>
  </div>
</template>

<script lang="ts" src="./app.component.ts"></script>

<style scoped lang="scss">
.app {
  position: relative;
}
</style>
