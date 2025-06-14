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
      <div class="px-8 py-4">
        <TableOfContents :tableOfContents="props.tableOfContents" />
      </div>
    </template>
    <template #right>
      <slot name="intro"> </slot>
    </template>
  </ResponsiveLayout>
</template>
