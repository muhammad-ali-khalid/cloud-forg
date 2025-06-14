<script setup>
const props = defineProps({
  contents: Object,
})
</script>

<template>
  <div class="w-full">
    <div class="bg-[#EAEAEA] h-auto p-2">
      <a
        :href="contents.href"
        class="text-black text-xl hover:cursor-pointer hover:text-orange-600"
      >
        {{ contents.index + '. ' + contents.content }}
      </a>
    </div>
  </div>
</template>
