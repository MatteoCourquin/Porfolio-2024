<script setup>
const route = useRoute()
const isRouteActive = (path) => route.path === path;
</script>

<template>
  <ul :class="[isRouteActive('/') ? 'text-white' : 'text-black']"
    class="absolute top-0 z-10 w-full flex justify-center gap-4 text-xl p-8">
    <li>
      <NuxtLink :class="[isRouteActive('/') ? 'active link_white' : 'link_black']" class="uppercase link" to="/">Home
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :class="[isRouteActive('/projects') && 'active', isRouteActive('/') ? 'link_white' : 'link_black']"
        class="uppercase link" to="/projects">Projects
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :class="[isRouteActive('/about') && 'active', isRouteActive('/') ? 'link_white' : 'link_black']"
        class="uppercase link" to="/about">About</NuxtLink>
    </li>
  </ul>
</template>

<style scoped lang='scss'></style>