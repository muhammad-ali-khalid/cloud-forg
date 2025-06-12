<script setup>
const props = defineProps({
  index: Number,
  content: String,
})
</script>

<template>
  <div>
    <div class="w-full bg-[#EAEAEA]">
      <a href="#" class="w-full text-black text-xl py-2 px-2 hover:cursor-pointer hover:text-orange-600">
        {{ props.index + '. ' + props.content }}
      </a>
    </div>
  </div>
</template>
