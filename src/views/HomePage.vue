<script setup>
import NavBar from '../components/organisms/NavBar.vue'
import HeroSection from '@/components/organisms/HeroSection.vue'
import TheFooter from '@/components/organisms/TheFooter.vue'
import TheButton from '@/components/atoms/TheButton.vue'
import TheHexagon from '@/components/molecules/TheHexagon.vue'
import TheCard from '@/components/molecules/TheCard.vue'

const services = [
  { name: 'Managed IT Services', routeName: 'managed-it-services' },
  { name: 'IT Consulting', routeName: 'managed-it-services' },
  { name: 'Cloud Solutions', routeName: 'managed-it-services' },
  { name: 'Business Apps & Software Development', routeName: 'managed-it-services' },
  { name: 'Staff Augmentation', routeName: 'managed-it-services/it-staff-augmentation-services' },
]

const cards = [
  {
    heading: 'Legal',
    detail:
      'Robust IT solutions for construction: project management tools, data analytics, cloud services, cybersecurity.',
  },
  {
    heading: 'Construction',
    detail:
      'Robust IT solutions for construction: project management tools, data analytics, cloud services, cybersecurity.',
  },
  {
    heading: 'Real Estate',
    detail:
      'Robust IT solutions for construction: project management tools, data analytics, cloud services, cybersecurity.',
  },
  {
    heading: 'Healthcare',
    detail:
      'Robust IT solutions for construction: project management tools, data analytics, cloud services, cybersecurity.',
  },
  {
    heading: 'Non Profit',
    detail:
      'Robust IT solutions for construction: project management tools, data analytics, cloud services, cybersecurity.',
  },
  {
    heading: 'Accounting & Finance',
    detail:
      'Robust IT solutions for construction: project management tools, data analytics, cloud services, cybersecurity.',
  },
]
</script>

<template>
  <NavBar />
  <HeroSection />
  <TheCarousel />
  <div class="w-full bg-[#E3E3E3]">
    <div class="flex flex-col items-center md:flex-row md:flex-wrap gap-2 py-4 mt-5 justify-center">
      <div v-for="service in services" :key="service.name">
        <TheHexagon :service="service.name" :route-name="service.routeName" />
      </div>
    </div>
  </div>
  <div class="w-full bg-[#E3E3E3] flex flex-wrap justify-center gap-3">
    <TheCard
      v-for="card in cards"
      :key="card.heading"
      :heading="card.heading"
      :detail="card.detail"
    />
  </div>
  <div class="flex justify-center">
    <div class="w-5/6 flex flex-col items-center gap-3 pt-12">
      <p class="text-[#000000BF] font-extrabold text-3xl text-center">
        Microsoft Management & Support
      </p>
      <p class="text-black text-sm font-medium text-center">
        Managing Microsoft 365 can monopolize your IT team's time. <br />
        Let us handle the continual updates and maximize the latest features so you get the most out
        of Microsoft 365 without overburdening your team.
      </p>
      <TheButton name="Learn more Today" />
      <img
        src="/microsoft.webp"
        alt="Microsoft 365"
        class="min-w-[250px] max-w-1/2 md:w-1/3 md:max-w-1/2"
      />
    </div>
  </div>
  <div class="flex justify-center">
    <div class="w-5/6 flex flex-col gap-4 pt-12">
      <p class="text-[#000000BF] font-extrabold text-3xl text-center">IT Powered By Trust</p>
      <p class="text-[#044F8A] text-sm font-medium text-center">
        We are successful when your business is successful. As true technology partners, we’re
        invested in your success. We deliver every solution like it was our business on the line,
        because it is.
      </p>
    </div>
  </div>
  <TheFooter />
</template>
