<script setup>
import TheContent from '../atoms/TheContent.vue'

const props = defineProps({
  tableOfContents: Array,
})
</script>

<template>
  <div class="w-full h-full px-8 py-4">
    <div class="text-3xl text-[#000000BF] font-bold mb-2">Table of contents</div>
    <div class="flex flex-col gap-5">
      <div class="w-full h-auto" v-for="(content, index) in props.tableOfContents" :key="index">
        <TheContent :contents="content" />
      </div>
    </div>
  </div>
</template>
