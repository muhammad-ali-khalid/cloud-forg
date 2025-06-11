<script setup>
import BaseLayout from '@/components/templates/BaseLayout.vue'
import BaseHero from '@/components/organisms/BaseHero.vue'
import BaseMain from '@/components/organisms/BaseMain.vue'
// Add your imports and composition API code here

const title = 'Microsoft Azure'
</script>

<template>
  <BaseLayout>
    <template #hero>
      <BaseHero :title="title" />
    </template>
    <template #main>
      <BaseMain />
    </template>
  </BaseLayout>
</template>
