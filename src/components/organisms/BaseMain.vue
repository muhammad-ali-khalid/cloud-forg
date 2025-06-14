<script setup>
import ResponsiveLayout from '../templates/ResponsiveLayout.vue'
import TableOfContents from '../molecules/TableOfContents.vue'

const props = defineProps({
  tableOfContents: Array,
})
</script>

<template>
  <ResponsiveLayout>
    <template #left>
      <TableOfContents :tableOfContents="props.tableOfContents" />
    </template>
    <template #right>
      <slot name="intro"> </slot>
    </template>
  </ResponsiveLayout>
  <slot name="page-content"></slot>
</template>
