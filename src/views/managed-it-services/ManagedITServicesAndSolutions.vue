<script setup>
import BaseLayout from '@/components/templates/BaseLayout.vue'
import BaseHero from '@/components/organisms/BaseHero.vue'
import BaseMain from '@/components/organisms/BaseMain.vue'
import TheAccordian from '@/components/molecules/TheAccordian.vue'

const pageContent = {
  title: 'Managed IT Services and Solutions',
  tableOfContents: [
    {
      index: 1,
      content: 'Our Core Services',
      href: '#1our-core-services',
    },
    { index: 2, content: 'Why Partner with CloudForg?', href: '#1why-partner-with-cloudforg?' },
  ],
}
const items = [
  {
    heading: 'Fuck',
    content: 'Hello world',
  },
  {
    heading: 'I love u',
    content: 'No I do not',
  },
]
</script>

<template>
  <BaseLayout>
    <template #hero>
      <BaseHero :title="pageContent.title" />
    </template>
    <template #main>
      <BaseMain :table-of-contents="pageContent.tableOfContents">
        <template #intro>
          <div class="px-8 py-4">
            <div class="text-[#000000BF] text-3xl font-bold mb-2">
              Dependable. Scalable. Strategic.
            </div>
            <div class="text-xl">
              At CloudForg, we provide customized Managed IT Services designed specifically for
              small and mid-sized businesses. Whether you need daily tech support or complete
              infrastructure oversight, our mission is to ensure your systems run smoothly—so you
              can focus on what matters most: growing your business.
            </div>
          </div>
        </template>
        <template #page-content>
          <div>
            <div id="1our-core-services" class="text-[#000000BF] text-3xl font-bold">
              Our Core Services
            </div>
            <TheAccordian :items="items" />
          </div>
        </template>
      </BaseMain>
    </template>
  </BaseLayout>
</template>
