<script setup>
</script>

<template>
  <section class="h-screen bg-gradient pt-header">
    <h1>3</h1>
  </section>
</template>

<style scoped lang='scss'>
.bg-gradient {
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 50%;
    right: 0;
    min-height: 200%;
    min-width: 100%;
    min-height: 200%;
    aspect-ratio: 1/1;
    transform: translateX(-50%);
    background-image: radial-gradient(#d9e3f1, #e347b5, #e8603c);
  }
}
</style>