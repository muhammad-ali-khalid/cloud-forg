<script setup>
import BaseLayout from '@/components/templates/BaseLayout.vue'
import BaseHero from '@/components/organisms/BaseHero.vue'
import BaseMain from '@/components/organisms/BaseMain.vue'

const title = 'Remote IT Services'
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
