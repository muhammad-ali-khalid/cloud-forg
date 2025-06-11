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
          path: 'managed-it-services-and-solutions',
          name: 'managed-it-services/managed-it-services-and-solutions',
          component: BasePage,
        },
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
          path: 'backup-and-disaster-recovery',
          name: 'managed-it-services/backup-and-disaster-recovery',
          component: BasePage,
        },
        {
          path: 'it-procurement-services',
          name: 'managed-it-services/it-procurement-services',
          component: BasePage,
        },
        {
          path: 'employee-onboarding-and-offboarding',
          name: 'managed-it-services/employee-onboarding-and-offboarding',
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
          path: 'it-consulting-and-services',
          name: 'it-consulting/it-consulting-and-services',
          component: BasePage,
        },
        {
          path: 'it-strategy-and-planning',
          name: 'it-consulting/it-strategy-and-planning',
          component: BasePage,
        },
        {
          path: 'it-assessment-services',
          name: 'it-consulting/it-assessment-services',
          component: BasePage,
        },
        {
          path: 'mergers-and-acquisitions-consulting',
          name: 'it-consulting/mergers-and-acquisitions-consulting',
          component: BasePage,
        },
        {
          path: 'virtual-cio-and-cto-services',
          name: 'it-consulting/virtual-cio-and-cto-services',
          component: BasePage,
        },
        {
          path: 'risk-and-compliance-services',
          name: 'it-consulting/risk-and-compliance-services',
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
          path: 'managed-cloud-infrastructure-services',
          name: 'cloud-solutions/managed-cloud-infrastructure-services',
          component: BasePage,
        },
        {
          path: 'managed-desktop-as-a-service',
          name: 'cloud-solutions/managed-desktop-as-a-service',
          component: BasePage,
        },
        {
          path: 'data-center-housing-and-cloud-data-migration',
          name: 'cloud-solutions/data-center-housing-and-cloud-data-migration',
          component: BasePage,
        },
        {
          path: 'microsoft-365',
          name: 'cloud-solutions/microsoft-365',
          component: BasePage,
        },
        {
          path: 'microsoft-teams-and-teams-phone',
          name: 'cloud-solutions/microsoft-teams-and-teams-phone',
          component: BasePage,
        },
        {
          path: 'amazon-web-services',
          name: 'cloud-solutions/amazon-web-services',
          component: BasePage,
        },
        {
          path: 'microsoft-onedrive-and-sharepoint',
          name: 'cloud-solutions/microsoft-onedrive-and-sharepoint',
          component: BasePage,
        },
        { path: 'microsoft-azure', name: 'cloud-solutions/microsoft-azure', component: BasePage },
        { path: 'google-workspace', name: 'cloud-solutions/google-workspace', component: BasePage },
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
