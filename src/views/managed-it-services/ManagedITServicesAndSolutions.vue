<script setup>
import BaseLayout from '@/components/templates/BaseLayout.vue'
import BaseHero from '@/components/organisms/BaseHero.vue'
import BaseMain from '@/components/organisms/BaseMain.vue'

const title = 'Managed IT Services and Solutions'
const contents = ['Our Core Services', 'Why Partner with CloudForg?']
</script>

<template>
  <BaseLayout>
    <template #hero>
      <BaseHero :title="title" />
    </template>
    <template #main>
      <BaseMain :contents="contents" />
    </template>
  </BaseLayout>
</template>
