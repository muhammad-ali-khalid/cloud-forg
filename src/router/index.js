import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import TheTest from '@/views/TheTest.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/managed-it-services',
      name: 'managed-it-services',
      component: TheTest,
      children: [
        {
          path: 'co-managed-it-services',
          name: 'managed-it-services/co-managed-it-services',
          component: TheTest,
        },
        {
          path: 'remote-it-services',
          name: 'managed-it-services/remote-it-services',
          component: TheTest,
        },
        {
          path: 'on-site-support',
          name: 'managed-it-services/on-site-support',
          component: TheTest,
        },
        {
          path: 'server-and-network-management',
          name: 'managed-it-services/server-and-network-management',
          component: TheTest,
        },
        {
          path: 'backup-disaster-recovery',
          name: 'managed-it-services/backup-disaster-recovery',
          component: TheTest,
        },
        { path: 'it-procurement', name: 'managed-it-services/it-procurement', component: TheTest },
        {
          path: 'employee-onboarding-offboarding',
          name: 'managed-it-services/employee-onboarding-offboarding',
          component: TheTest,
        },
        {
          path: 'it-staff-augmentation-services',
          name: 'managed-it-services/it-staff-augmentation-services',
          component: TheTest,
        },
      ],
    },
    {
      path: '/it-consulting',
      name: 'it-consulting',
      component: TheTest,
      children: [
        {
          path: 'it-strategy-planning',
          name: 'it-consulting/it-strategy-planning',
          component: TheTest,
        },
        {
          path: 'it-assessment-services',
          name: 'it-consulting/it-assessment-services',
          component: TheTest,
        },
        {
          path: 'mergers-acquisitions-consulting',
          name: 'it-consulting/mergers-acquisitions-consulting',
          component: TheTest,
        },
        {
          path: 'virtual-cio-cto-services',
          name: 'it-consulting/virtual-cio-cto-services',
          component: TheTest,
        },
        {
          path: 'risk-compliance-services',
          name: 'it-consulting/risk-compliance-services',
          component: TheTest,
        },
      ],
    },
    {
      path: '/cloud-solutions',
      name: 'cloud-solutions',
      component: TheTest,
      children: [
        {
          path: 'managed-cloud-services',
          name: 'cloud-solutions/managed-cloud-services',
          component: TheTest,
        },
        {
          path: 'managed-cloud-infrastructure',
          name: 'cloud-solutions/managed-cloud-infrastructure',
          component: TheTest,
        },
        {
          path: 'managed-cloud-security',
          name: 'cloud-solutions/managed-cloud-security',
          component: TheTest,
        },
        {
          path: 'data-center-housing-cloud-data-migration',
          name: 'cloud-solutions/data-center-housing-cloud-data-migration',
          component: TheTest,
        },
        {
          path: 'microsoft-365-services',
          name: 'cloud-solutions/microsoft-365-services',
          component: TheTest,
        },
        {
          path: 'microsoft-teams-teams-phone',
          name: 'cloud-solutions/microsoft-teams-teams-phone',
          component: TheTest,
        },
        { path: 'microsoft-azure', name: 'cloud-solutions/microsoft-azure', component: TheTest },
        { path: 'google-workspace', name: 'cloud-solutions/google-workspace', component: TheTest },
        { path: 'amazon-aws', name: 'cloud-solutions/amazon-aws', component: TheTest },
      ],
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: TheTest,
      children: [
        { path: 'it-service-plans', name: 'pricing/it-service-plans', component: TheTest },
        { path: 'cybersecurity-plans', name: 'pricing/cybersecurity-plans', component: TheTest },
      ],
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: TheTest,
      children: [
        { path: 'leadership', name: 'about-us/leadership', component: TheTest },
        { path: 'message-from-ceo', name: 'about-us/message-from-ceo', component: TheTest },
        { path: 'partners', name: 'about-us/partners', component: TheTest },
        { path: 'certifications', name: 'about-us/certifications', component: TheTest },
        { path: 'locations', name: 'about-us/locations', component: TheTest },
      ],
    },
  ],
})

export default router
