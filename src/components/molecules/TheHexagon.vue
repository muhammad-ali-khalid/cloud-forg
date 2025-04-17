<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  service: String,
  routeName: String,
})
</script>

<template>
  <RouterLink :to="{ name: props.routeName }">
    <div
      class="h-[200px] w-[180px] hexagon bg-white flex flex-col items-center justify-center gap-2 text-center shadow-red-500 hover:cursor-pointer"
    >
      <p class="text-[#044F8A] text-xl font-bold">{{ props.service }}</p>
      <p class="text-[#044F8A] text-xs">Discover more</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.hexagon {
  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 70%, 50% 100%, 0 70%);
}
</style>
