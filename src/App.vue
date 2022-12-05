<template>
  <div class="app">
    <n-message-provider>
      <router-view :key="$route.fullPath"></router-view>
    </n-message-provider>
  </div>
</template>

<script lang="ts" src="./app.component.ts"></script>
