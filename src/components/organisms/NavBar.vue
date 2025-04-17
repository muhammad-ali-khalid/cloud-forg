<script setup>
import TheLogo from '../atoms/TheLogo.vue'
import MenuButton from '../atoms/MenuButton.vue'
import TheButton from '../atoms/TheButton.vue'
import { ref } from 'vue'

const navItems = ['IT SOLUTIONS', 'ABOUT US']

const navLinks = [
  {
    category: 'MANAGED IT SERVICES',
    links: [
      { name: 'Managed IT Services', routeName: 'managed-it-services' },
      { name: 'Co-Managed IT Services', routeName: 'managed-it-services/co-managed-it-services' },
      { name: 'Remote IT Services', routeName: 'managed-it-services/remote-it-services' },
      { name: 'On-Site Support', routeName: 'managed-it-services/on-site-support' },
      {
        name: 'Server and Network Management',
        routeName: 'managed-it-services/server-and-network-management',
      },
      {
        name: 'Backup & Disaster Recovery',
        routeName: 'managed-it-services/backup-disaster-recovery',
      },
      { name: 'IT Procurement', routeName: 'managed-it-services/it-procurement' },
      {
        name: 'Employee Onboarding & Offboarding',
        routeName: 'managed-it-services/employee-onboarding-offboarding',
      },
      {
        name: 'IT Staff Augmentation Services',
        routeName: 'managed-it-services/it-staff-augmentation-services',
      },
    ],
  },
  {
    category: 'IT CONSULTING',
    links: [
      { name: 'IT Strategy & Planning', routeName: 'it-consulting/it-strategy-planning' },
      { name: 'IT Assessment Services', routeName: 'it-consulting/it-assessment-services' },
      {
        name: 'Mergers & Acquisitions Consulting',
        routeName: 'it-consulting/mergers-acquisitions-consulting',
      },
      { name: 'Virtual CIO & CTO Services', routeName: 'it-consulting/virtual-cio-cto-services' },
      { name: 'Risk & Compliance Services', routeName: 'it-consulting/risk-compliance-services' },
    ],
  },
  {
    category: 'CLOUD SOLUTIONS',
    links: [
      { name: 'Managed Cloud Services', routeName: 'cloud-solutions/managed-cloud-services' },
      {
        name: 'Managed Cloud Infrastructure',
        routeName: 'cloud-solutions/managed-cloud-infrastructure',
      },
      { name: 'Managed Cloud Security', routeName: 'cloud-solutions/managed-cloud-security' },
      {
        name: 'Data Center Housing & Cloud & Data Migration',
        routeName: 'cloud-solutions/data-center-housing-cloud-data-migration',
      },
      { name: 'Microsoft 365 Services', routeName: 'cloud-solutions/microsoft-365-services' },
      {
        name: 'Microsoft Teams & Teams Phone',
        routeName: 'cloud-solutions/microsoft-teams-teams-phone',
      },
      { name: 'Microsoft Azure', routeName: 'cloud-solutions/microsoft-azure' },
      { name: 'Google Workspace (GSuite)', routeName: 'cloud-solutions/google-workspace' },
      { name: 'Amazon AWS', routeName: 'cloud-solutions/amazon-aws' },
    ],
  },
  {
    category: 'PRICING',
    links: [
      { name: 'IT Service Plans', routeName: 'pricing/it-service-plans' },
      { name: 'Cybersecurity Plans', routeName: 'pricing/cybersecurity-plans' },
    ],
  },
  {
    category: 'ABOUT US',
    links: [
      { name: 'Leadership', routeName: 'about-us/leadership' },
      { name: 'Message from CEO', routeName: 'about-us/message-from-ceo' },
      { name: 'Partners', routeName: 'about-us/partners' },
      { name: 'Certifications', routeName: 'about-us/certifications' },
      { name: 'Locations', routeName: 'about-us/locations' },
    ],
  },
]

const toggle = ref(false)

const activeCategory = ref(null)
</script>

<template>
  <nav
    class="fixed top-0 z-50 bg-white w-full flex justify-between items-center md:justify-start md:gap-[8vw] py-4 px-8"
    @mouseup="console.log(1)"
  >
    <RouterLink :to="{ name: 'home' }"><TheLogo /></RouterLink>
    <button
      class="hidden md:block text-sm text-blue-900 font-medium hover:cursor-pointer hover:text-orange-600"
      v-for="item in navItems"
      :key="item"
    >
      {{ item }}
    </button>
    <TheButton name="Let's Talk" class="hidden md:block" />
    <MenuButton class="md:hidden hover:cursor-pointer" @click="toggle = !toggle" />
  </nav>

  <div v-if="toggle" class="fixed inset-0 top- 1 z-40 bg-transparent overflow-y-scroll">
    <div class="w-auto max-w-md bg-[#E3E3E3] rounded-2xl mx-2 mt-24 px-5 py-6">
      <div
        class="text-md text-blue-900 font-bold"
        v-for="navLink in navLinks"
        :key="navLink.category"
      >
        <button @click="activeCategory = navLink.category" class="flex gap-2">
          {{ navLink.category }}
          <div v-if="activeCategory === navLink.category">⌄</div>
          <div v-else>></div>
        </button>

        <div v-if="activeCategory === navLink.category" class="py-2">
          <div v-for="link in navLink.links" :key="link">
            <RouterLink
              :to="{ name: link.routeName }"
              class="text-sm text-[#223756] font-medium hover:text-orange-600 hover:cursor-pointer"
            >
              {{ link.name }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
