<script setup lang="ts">
import { ElConfigProvider } from 'element-plus';
</script>

<template>
 <ElConfigProvider>
  <div class="h-full">
    <RouterView />
  </div>
  </ElConfigProvider>
</template>

<style scoped>

</style>
