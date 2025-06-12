<script setup>
import TheLogo from '../atoms/TheLogo.vue'
import TheButton from '../atoms/TheButton.vue'

const footerLinks = [
  {
    heading: 'SERVICES & CAPABILITIES',
    links: ['Managed IT Services', 'IT Consulting', 'Cloud Solutions'],
  },
  {
    heading: 'COMPANY',
    links: ['About Us', 'Client Support', 'Contact Us'],
  },
]
</script>

<template>
  <footer class="w-full h-full" id="footer">
    <div class="w-full h-auto bg-[#E3E3E3] px-4 py-10">
      <div class="flex flex-col gap-4 md:flex-row md:justify-around">
        <div
          class="text-md text-blue-900 font-bold"
          v-for="footerLink in footerLinks"
          :key="footerLink"
        >
          {{ footerLink.heading }}
          <div class="py-2" v-for="link in footerLink.links" :key="link">
            <button
              class="text-sm text-[#223756] font-medium hover:cursor-pointer hover:text-orange-600"
            >
              {{ link }}
            </button>
          </div>
        </div>
        <div class="flex flex-col items-center gap-4 md:justify-center">
          <TheButton name="Client Support" class="" />
          <div class="text-md text-[#223756] font-semibold"><p>Stay Connected with Us!</p></div>
        </div>
      </div>
    </div>
  </footer>
</template>
