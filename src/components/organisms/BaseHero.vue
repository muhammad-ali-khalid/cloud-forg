<script setup>
const props = defineProps({
  title: String,
  description: String,
})
</script>

<template>
  <div class="parent object-cover w-full h-[459px] flex flex-col items-center justify-center gap-10">
    <div class="text-4xl text-[#5CAA46] font-black text-center">{{ props.title }}</div>
    <div class="text-md text-white px-4">
     {{ props.description }}
    </div>
  </div>
</template>

<style scoped>
.parent {
  background-image: url('/hero-img.png');
}
</style>
