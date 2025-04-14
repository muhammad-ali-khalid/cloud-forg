<script setup>
const props = defineProps({
  name: String,
})
</script>

<template>
  <div>
    <button
      class="text-sm text-[#223756] font-bold border-3 border-orange-600 p-2 rounded hover:bg-orange-600 hover:text-white hover:cursor-pointer"
    >
      {{ props.name }}
    </button>
  </div>
</template>
