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
      {
        name: 'Managed IT Services & Solutions',
        routeName: 'managed-it-services/managed-it-services-and-solutions',
      },
      { name: 'Co-Managed IT Services', routeName: 'managed-it-services/co-managed-it-services' },
      { name: 'Remote IT Services', routeName: 'managed-it-services/remote-it-services' },
      { name: 'On-Site Support', routeName: 'managed-it-services/on-site-support' },
      {
        name: 'Server and Network Management',
        routeName: 'managed-it-services/server-and-network-management',
      },
      {
        name: 'Backup & Disaster Recovery (BDR)',
        routeName: 'managed-it-services/backup-and-disaster-recovery',
      },
      { name: 'IT Procurement Services', routeName: 'managed-it-services/it-procurement-services' },
      {
        name: 'Employee Onboarding & Offboarding',
        routeName: 'managed-it-services/employee-onboarding-and-offboarding',
      },
    ],
  },
  {
    category: 'IT CONSULTING',
    links: [
      { name: 'IT Consulting & Services', routeName: 'it-consulting/it-consulting-and-services' },
      { name: 'IT Strategy & Planning', routeName: 'it-consulting/it-strategy-and-planning' },
      { name: 'IT Assessment Services', routeName: 'it-consulting/it-assessment-services' },
      {
        name: 'Mergers & Acquisitions Consulting',
        routeName: 'it-consulting/mergers-and-acquisitions-consulting',
      },
      {
        name: 'Virtual CIO & CTO Services',
        routeName: 'it-consulting/virtual-cio-and-cto-services',
      },
      {
        name: 'Risk & Compliance Services',
        routeName: 'it-consulting/risk-and-compliance-services',
      },
    ],
  },
  {
    category: 'CLOUD SOLUTIONS',
    links: [
      { name: 'Managed Cloud Services', routeName: 'cloud-solutions/managed-cloud-services' },
      {
        name: 'Managed Cloud Infrastructure Services',
        routeName: 'cloud-solutions/managed-cloud-infrastructure-services',
      },
      {
        name: 'Managed Desktop as a Service (Daas)',
        routeName: 'cloud-solutions/managed-desktop-as-a-service',
      },
      {
        name: 'Data Center Housing & Cloud Data Migration',
        routeName: 'cloud-solutions/data-center-housing-and-cloud-data-migration',
      },
      { name: 'Microsoft 365', routeName: 'cloud-solutions/microsoft-365' },
      {
        name: 'Microsoft Teams & Teams Phone',
        routeName: 'cloud-solutions/microsoft-teams-and-teams-phone',
      },
      { name: 'Amazon Web Services (AWS)', routeName: 'cloud-solutions/amazon-web-services' },
      {
        name: 'Microsoft OneDrive & SharePoint',
        routeName: 'cloud-solutions/microsoft-onedrive-and-sharepoint',
      },
      {
        name: 'Google Workspace (Formally G Suite)',
        routeName: 'cloud-solutions/google-workspace',
      },
    ],
  },
]

const toggle = ref(false)

const activeCategory = ref(null)
</script>

<template>
  <nav
    class="fixed top-0 z-50 bg-white w-full h-auto flex justify-between items-center md:justify-start md:gap-[8vw] py-4 px-4 md:px-8"
  >
    <RouterLink :to="{ name: 'home' }"><TheLogo /></RouterLink>
    <button
      class="hidden md:block text-sm text-blue-900 font-medium hover:cursor-pointer hover:text-orange-600"
      @click="toggle = !toggle"
      v-for="item in navItems"
      :key="item"
    >
      {{ item }}
    </button>
    <TheButton name="Let's Talk" class="hidden md:block" />
    <MenuButton class="md:hidden hover:cursor-pointer" @click="toggle = !toggle" />
  </nav>

  <div v-if="toggle" class="fixed w-full h-auto top-[72px] z-50 overflow-y-scroll">
    <div class="w-auto bg-[#E3E3E3] rounded-2xl mx-8 px-5 py-6">
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
