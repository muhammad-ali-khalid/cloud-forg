<script setup>
import BaseLayout from '@/components/templates/BaseLayout.vue'
import TheButton from '@/components/atoms/TheButton.vue'
import TheHero from '@/components/organisms/TheHero.vue'
import TheHexagon from '@/components/molecules/TheHexagon.vue'
import TheCard from '@/components/molecules/TheCard.vue'
import TheCarousel from '@/components/molecules/TheCarousel.vue'
import { CarouselItem } from '@/components/ui/carousel'
import ResponsiveLayout from '@/components/templates/ResponsiveLayout.vue'

const services = [
  { name: 'Managed IT Services', routeName: 'managed-it-services' },
  { name: 'IT Consulting', routeName: 'managed-it-services' },
  { name: 'Cloud Solutions', routeName: 'managed-it-services' },
  { name: 'Business Apps & Software Development', routeName: 'managed-it-services' },
  { name: 'Staff Augmentation', routeName: 'managed-it-services' },
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
  <BaseLayout>
    <template #hero>
      <TheHero />
    </template>
    <template #main>
      <ResponsiveLayout>
        <template #left>
          <div class="flex flex-col justify-center gap-4 px-4">
            <div class="text-3xl text-[#000000BF] font-black p-4">
              Technology Tailored to Your Needs
            </div>
            <div class="text-lg px-4">
              With over 20 years of experience, and over 70 IT specialists, GCS provides tailored IT
              solutions for organizations across all industries.
            </div>
          </div>
        </template>
        <template #right>
          <div class="flex justify-center bg-[#F9F9F9]">
            <TheCarousel class="w-2/3">
              ><CarouselItem v-for="service in services" :key="service.name">
                <TheHexagon
                  :service="service.name"
                  :route-name="service.routeName"
                  class="flex justify-center py-4"
                /> </CarouselItem
            ></TheCarousel>
          </div>
        </template>
      </ResponsiveLayout>
      <ResponsiveLayout>
        <template #left>
          <div class="flex flex-col justify-center gap-4 px-4">
            <div class="text-3xl text-[#000000BF] font-black p-4">
              Helping Businesses in every Industry
            </div>
            <div class="text-lg p-4">
              With over 20 years of experience, and over 70 IT specialists, GCS provides tailored IT
              solutions for organizations across all industries.
            </div>
          </div>
        </template>
        <template #right>
          <div class="flex justify-center">
            <TheCarousel class="w-2/3">
              <CarouselItem v-for="card in cards" :key="card.heading">
                <TheCard
                  :heading="card.heading"
                  :detail="card.detail"
                  class="flex justify-center py-8"
              /></CarouselItem>
            </TheCarousel>
          </div>
        </template>
      </ResponsiveLayout>

      <div class="flex justify-center">
        <div class="w-5/6 flex flex-col items-center gap-3 pt-12">
          <p class="text-[#000000BF] font-extrabold text-3xl text-center">
            Microsoft Management & Support
          </p>
          <p class="text-black text-sm font-medium">
            Managing Microsoft 365 can monopolize your IT team's time. <br />
            Let us handle the continual updates and maximize the latest features so you get the most
            out of Microsoft 365 without overburdening your team.
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
        <div class="w-5/6 flex flex-col gap-4 py-12">
          <p class="text-[#000000BF] font-extrabold text-3xl text-center">IT Powered By Trust</p>
          <p class="text-[#044F8A] text-sm font-medium">
            We are successful when your business is successful. As true technology partners, we’re
            invested in your success. We deliver every solution like it was our business on the
            line, because it is.
          </p>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>
