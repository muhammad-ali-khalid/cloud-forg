<script setup>
const props = defineProps({
  heading: String,
  detail: String,
})
</script>

<template>
  <div>
    <div class="w-56 h-auto bg-[#044F8A] flex flex-col py-5 px-3 rounded-2xl hover:cursor-pointer">
      <p class="text-lg text-white font-bold">{{ props.heading }}</p>
      <p class="text-xs text-white font-normal">{{ props.detail }}</p>
    </div>
  </div>
</template>
