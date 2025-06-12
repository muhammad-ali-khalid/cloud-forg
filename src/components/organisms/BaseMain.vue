<script setup>
import ResponsiveLayout from '../templates/ResponsiveLayout.vue'
import TableOfContents from '../molecules/TableOfContents.vue'

const props = defineProps({
  contents: Array,
})
</script>

<template>
  <ResponsiveLayout>
    <template #left>
      <TableOfContents :contents="contents" />
    </template>
    <template #right>
      <h1>right</h1>
    </template>
  </ResponsiveLayout>
</template>
