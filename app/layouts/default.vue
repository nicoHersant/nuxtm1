<script setup lang="ts">
</script>

<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.layout {
  min-height: 100vh;
  background: radial-gradient(
    circle at top,
    #1f2937,
    #020617
  );
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
