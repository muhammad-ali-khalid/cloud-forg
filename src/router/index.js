import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import BasePage from '@/views/BasePage.vue'

// Managed IT Services Components
import ManagedITServicesAndSolutions from '@/views/managed-it-services/ManagedITServicesAndSolutions.vue'
import CoManagedITServices from '@/views/managed-it-services/CoManagedITServices.vue'
import RemoteITServices from '@/views/managed-it-services/RemoteITServices.vue'
import OnSiteSupport from '@/views/managed-it-services/OnSiteITSupport.vue'
import ServerAndNetworkManagement from '@/views/managed-it-services/ServerAndNetworkManagement.vue'
import BackupAndDisasterRecovery from '@/views/managed-it-services/BackupAndDisasterRecovery.vue'
import ITProcurementServices from '@/views/managed-it-services/ITProcurementServices.vue'
import EmployeeOnboardingOffboarding from '@/views/managed-it-services/EmployeeOnboardingOffboarding.vue'

// IT Consulting Components
import ITConsultingAndServices from '@/views/it-consulting/ITConsultingAndServices.vue'
import ITStrategyAndPlanning from '@/views/it-consulting/ITStrategyAndPlanning.vue'
import ITAssessmentServices from '@/views/it-consulting/ITAssessmentServices.vue'
import MergersAndAcquisitionsConsulting from '@/views/it-consulting/MergersAndAcquisitionsConsulting.vue'
import VirtualCIOAndCTOServices from '@/views/it-consulting/VirtualCIOAndCTOServices.vue'
import RiskAndComplianceServices from '@/views/it-consulting/RiskAndComplianceServices.vue'

// Cloud Solutions Components
import ManagedCloudServices from '@/views/cloud-solutions/ManagedCloudServices.vue'
import ManagedCloudInfrastructureServices from '@/views/cloud-solutions/ManagedCloudInfrastructureServices.vue'
import ManagedDesktopAsAService from '@/views/cloud-solutions/ManagedDesktopAsAService.vue'
import DataCenterHousingAndCloudDataMigration from '@/views/cloud-solutions/DataCenterHousingAndCloudDataMigration.vue'
import Microsoft365 from '@/views/cloud-solutions/Microsoft365.vue'
import MicrosoftTeamsAndTeamsPhone from '@/views/cloud-solutions/MicrosoftTeamsAndTeamsPhone.vue'
import AmazonWebServices from '@/views/cloud-solutions/AmazonWebServices.vue'
import MicrosoftOneDriveAndSharePoint from '@/views/cloud-solutions/MicrosoftOneDriveAndSharePoint.vue'
import MicrosoftAzure from '@/views/cloud-solutions/MicrosoftAzure.vue'
import GoogleWorkspace from '@/views/cloud-solutions/GoogleWorkspace.vue'

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
      redirect: '/managed-it-services/managed-it-services-and-solutions',
      children: [
        {
          path: 'managed-it-services-and-solutions',
          name: 'managed-it-services/managed-it-services-and-solutions',
          component: ManagedITServicesAndSolutions,
        },
        {
          path: 'co-managed-it-services',
          name: 'managed-it-services/co-managed-it-services',
          component: CoManagedITServices,
        },
        {
          path: 'remote-it-services',
          name: 'managed-it-services/remote-it-services',
          component: RemoteITServices,
        },
        {
          path: 'on-site-support',
          name: 'managed-it-services/on-site-support',
          component: OnSiteSupport,
        },
        {
          path: 'server-and-network-management',
          name: 'managed-it-services/server-and-network-management',
          component: ServerAndNetworkManagement,
        },
        {
          path: 'backup-and-disaster-recovery',
          name: 'managed-it-services/backup-and-disaster-recovery',
          component: BackupAndDisasterRecovery,
        },
        {
          path: 'it-procurement-services',
          name: 'managed-it-services/it-procurement-services',
          component: ITProcurementServices,
        },
        {
          path: 'employee-onboarding-and-offboarding',
          name: 'managed-it-services/employee-onboarding-and-offboarding',
          component: EmployeeOnboardingOffboarding,
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
          component: ITConsultingAndServices,
        },
        {
          path: 'it-strategy-and-planning',
          name: 'it-consulting/it-strategy-and-planning',
          component: ITStrategyAndPlanning,
        },
        {
          path: 'it-assessment-services',
          name: 'it-consulting/it-assessment-services',
          component: ITAssessmentServices,
        },
        {
          path: 'mergers-and-acquisitions-consulting',
          name: 'it-consulting/mergers-and-acquisitions-consulting',
          component: MergersAndAcquisitionsConsulting,
        },
        {
          path: 'virtual-cio-and-cto-services',
          name: 'it-consulting/virtual-cio-and-cto-services',
          component: VirtualCIOAndCTOServices,
        },
        {
          path: 'risk-and-compliance-services',
          name: 'it-consulting/risk-and-compliance-services',
          component: RiskAndComplianceServices,
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
          component: ManagedCloudServices,
        },
        {
          path: 'managed-cloud-infrastructure-services',
          name: 'cloud-solutions/managed-cloud-infrastructure-services',
          component: ManagedCloudInfrastructureServices,
        },
        {
          path: 'managed-desktop-as-a-service',
          name: 'cloud-solutions/managed-desktop-as-a-service',
          component: ManagedDesktopAsAService,
        },
        {
          path: 'data-center-housing-and-cloud-data-migration',
          name: 'cloud-solutions/data-center-housing-and-cloud-data-migration',
          component: DataCenterHousingAndCloudDataMigration,
        },
        {
          path: 'microsoft-365',
          name: 'cloud-solutions/microsoft-365',
          component: Microsoft365,
        },
        {
          path: 'microsoft-teams-and-teams-phone',
          name: 'cloud-solutions/microsoft-teams-and-teams-phone',
          component: MicrosoftTeamsAndTeamsPhone,
        },
        {
          path: 'amazon-web-services',
          name: 'cloud-solutions/amazon-web-services',
          component: AmazonWebServices,
        },
        {
          path: 'microsoft-onedrive-and-sharepoint',
          name: 'cloud-solutions/microsoft-onedrive-and-sharepoint',
          component: MicrosoftOneDriveAndSharePoint,
        },
        {
          path: 'microsoft-azure',
          name: 'cloud-solutions/microsoft-azure',
          component: MicrosoftAzure,
        },
        {
          path: 'google-workspace',
          name: 'cloud-solutions/google-workspace',
          component: GoogleWorkspace,
        },
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
