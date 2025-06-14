<script setup>
import BaseLayout from '@/components/templates/BaseLayout.vue'
import BaseHero from '@/components/organisms/BaseHero.vue'
import BaseMain from '@/components/organisms/BaseMain.vue'

const pageContent = {
  title: 'Managed IT Services and Solutions',
  tableOfContents: [
    {
      index: 1,
      content: 'Our Core Services',
      href: '#1our-core-services',
    },
    { index: 2, content: 'Why Partner with CloudForg?', href: '#1why-partner-with-cloudforg' },
  ],
}
</script>

<template>
  <BaseLayout>
    <template #hero>
      <BaseHero :title="pageContent.title" />
    </template>
    <template #main>
      <BaseMain :table-of-contents="pageContent.tableOfContents">
        <template #intro>
          Dependable. Scalable. Strategic. At CloudForg, we provide customized Managed IT Services
          designed specifically for small and mid-sized businesses. Whether you need daily tech
          support or complete infrastructure oversight, our mission is to ensure your systems run
          smoothly—so you can focus on what matters most: growing your business.
        </template>
      </BaseMain>
    </template>
  </BaseLayout>
</template>
