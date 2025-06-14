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
  items: [
    {
      heading: '24/7 Technical Support',
      content: `We're available around the clock to resolve technical issues quickly and efficiently—helping you
minimize downtime and stay productive.`,
    },
    {
      heading: 'Proactive System Monitoring & Maintenance',
      content: `We keep a constant eye on your IT environment to catch and fix problems before they disrupt
your operations. Our routine updates, patching, and performance optimization keep your systems
secure and running smoothly.`,
    },
    {
      heading: 'Cloud Solutions',
      content: `Whether you're transitioning to the cloud or improving your existing setup, we offer scalable,
secure cloud services—including Microsoft 365, Google Workspace, and hybrid environments—
tailored to your needs.`,
    },
    {
      heading: 'Data Backup & Disaster Recovery',
      content: `We safeguard your critical data through automated backups and well-tested recovery strategies—
ensuring your business can bounce back quickly from any unexpected events.`,
    },
    {
      heading: 'Cybersecurity Services',
      content: `Protect your business with layered security, real-time threat monitoring, firewall management,
and endpoint protection—built to guard against today’s complex cyber threats.`,
    },
    {
      heading: 'IT Consulting & Strategic Planning',
      content: `Think of us as your technology advisor. We work with you to align IT strategies with your
business goals, helping you plan, budget, and make smarter technology decisions.`,
    },
    {
      heading: 'Server & Network Management',
      content: `From new server deployments to full network design and performance tuning, we manage the
behind-the-scenes infrastructure so your team can stay focused and efficient.`,
    },
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
          <div class="px-6 md:px-15 pt-10">
            <div class="text-[#000000BF] text-3xl font-black mb-4">
              Dependable. Scalable. Strategic.
            </div>
            <div class="text-md md:text-lg lg:text-xl">
              At CloudForg, we provide customized Managed IT Services designed specifically for
              small and mid-sized businesses. Whether you need daily tech support or complete
              infrastructure oversight, our mission is to ensure your systems run smoothly—so you
              can focus on what matters most: growing your business.
            </div>
          </div>
        </template>
        <template #page-content>
          <div>
            <div id="1our-core-services" class="text-[#000000BF] text-3xl font-black text-center pt-10">
              Our Core Services
            </div>
            <div class="w-full flex justify-center">
              <TheAccordian :items="pageContent.items" />
            </div>
          </div>
        </template>
      </BaseMain>
    </template>
  </BaseLayout>
</template>
