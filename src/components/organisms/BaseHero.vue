<script setup>
const props = defineProps({
  name: String,
})
</script>

<template>
  <div class="parent w-full h-[459px] flex flex-col items-center justify-center gap-10">
    <div class="text-3xl text-[#5CAA46] font-black text-center">{{ props.name }}</div>
    <div class="text-md text-white px-4">
      Get expert Remote IT Support when and where you need it — fast, reliable, and hassle-free.
    </div>
  </div>
</template>

<style scoped>
.parent {
  background-image: url('/hero-img.png');
}
</style>
