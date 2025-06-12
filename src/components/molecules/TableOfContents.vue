<script setup>
import TheContent from '../atoms/TheContent.vue'

const props = defineProps({
  contents: Array,
})
</script>

<template>
  <div class="w-full h-auto">
    <h1>Table of Contents</h1>
    <div class="h-auto" v-for="(content, index) in props.contents" :key="index">
      <TheContent :index="index + 1" :content="content" />
    </div>
  </div>
</template>
