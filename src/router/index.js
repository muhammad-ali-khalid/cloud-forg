import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import BasePage from '@/views/BasePage.vue'

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
      component: BasePage,
      children: [
        {
          path: 'co-managed-it-services',
          name: 'managed-it-services/co-managed-it-services',
          component: BasePage,
        },
        {
          path: 'remote-it-services',
          name: 'managed-it-services/remote-it-services',
          component: BasePage,
        },
        {
          path: 'on-site-support',
          name: 'managed-it-services/on-site-support',
          component: BasePage,
        },
        {
          path: 'server-and-network-management',
          name: 'managed-it-services/server-and-network-management',
          component: BasePage,
        },
        {
          path: 'backup-disaster-recovery',
          name: 'managed-it-services/backup-disaster-recovery',
          component: BasePage,
        },
        { path: 'it-procurement', name: 'managed-it-services/it-procurement', component: BasePage },
        {
          path: 'employee-onboarding-offboarding',
          name: 'managed-it-services/employee-onboarding-offboarding',
          component: BasePage,
        },
        {
          path: 'it-staff-augmentation-services',
          name: 'managed-it-services/it-staff-augmentation-services',
          component: BasePage,
        },
      ],
    },
    {
      path: '/it-consulting',
      name: 'it-consulting',
      component: BasePage,
      children: [
        {
          path: 'it-strategy-planning',
          name: 'it-consulting/it-strategy-planning',
          component: BasePage,
        },
        {
          path: 'it-assessment-services',
          name: 'it-consulting/it-assessment-services',
          component: BasePage,
        },
        {
          path: 'mergers-acquisitions-consulting',
          name: 'it-consulting/mergers-acquisitions-consulting',
          component: BasePage,
        },
        {
          path: 'virtual-cio-cto-services',
          name: 'it-consulting/virtual-cio-cto-services',
          component: BasePage,
        },
        {
          path: 'risk-compliance-services',
          name: 'it-consulting/risk-compliance-services',
          component: BasePage,
        },
      ],
    },
    {
      path: '/cloud-solutions',
      name: 'cloud-solutions',
      component: BasePage,
      children: [
        {
          path: 'managed-cloud-services',
          name: 'cloud-solutions/managed-cloud-services',
          component: BasePage,
        },
        {
          path: 'managed-cloud-infrastructure',
          name: 'cloud-solutions/managed-cloud-infrastructure',
          component: BasePage,
        },
        {
          path: 'managed-cloud-security',
          name: 'cloud-solutions/managed-cloud-security',
          component: BasePage,
        },
        {
          path: 'data-center-housing-cloud-data-migration',
          name: 'cloud-solutions/data-center-housing-cloud-data-migration',
          component: BasePage,
        },
        {
          path: 'microsoft-365-services',
          name: 'cloud-solutions/microsoft-365-services',
          component: BasePage,
        },
        {
          path: 'microsoft-teams-teams-phone',
          name: 'cloud-solutions/microsoft-teams-teams-phone',
          component: BasePage,
        },
        { path: 'microsoft-azure', name: 'cloud-solutions/microsoft-azure', component: BasePage },
        { path: 'google-workspace', name: 'cloud-solutions/google-workspace', component: BasePage },
        { path: 'amazon-aws', name: 'cloud-solutions/amazon-aws', component: BasePage },
      ],
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: BasePage,
      children: [
        { path: 'it-service-plans', name: 'pricing/it-service-plans', component: BasePage },
        { path: 'cybersecurity-plans', name: 'pricing/cybersecurity-plans', component: BasePage },
      ],
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: BasePage,
      children: [
        { path: 'leadership', name: 'about-us/leadership', component: BasePage },
        { path: 'message-from-ceo', name: 'about-us/message-from-ceo', component: BasePage },
        { path: 'partners', name: 'about-us/partners', component: BasePage },
        { path: 'certifications', name: 'about-us/certifications', component: BasePage },
        { path: 'locations', name: 'about-us/locations', component: BasePage },
      ],
    },
  ],
})

export default router
