<script setup>
import TheLogo from '../atoms/TheLogo.vue'
import TheButton from '../atoms/TheButton.vue'

const footerLinks = [
  {
    heading: 'SERVICES & CAPABILITIES',
    links: [
      'Managed IT Services',
      'IT Consulting',
      'Cloud Solutions',
      'Managed Cybersecurity',
      'Software Development',
    ],
  },
  {
    heading: 'COMPANY',
    links: ['About Us', 'Client Support', 'Contact Us', 'Blog'],
  },
]
</script>

<template>
  <footer class="w-full h-full">
    <div class="w-full h-2/3">
      <video src="/footer-vid.mp4" autoplay muted loop playsinline></video>
    </div>
    <div class="relative bg-[#044f8a] w-full h-115 md:h-40">
      <div
        class="absolute w-5/6 h-auto top-[150px] md:top-[10px] left-1/2 transform -translate-1/2 bg-[#E3E3E3] px-4 py-8 rounded-2xl"
      >
        <div class="flex flex-col gap-4 md:flex-row md:justify-around">
          <div
            class="text-md text-blue-900 font-bold"
            v-for="footerLink in footerLinks"
            :key="footerLink"
          >
            {{ footerLink.heading }}
            <div class="py-2" v-for="link in footerLink.links" :key="link">
              <button class="text-sm text-[#223756] font-medium hover:cursor-pointer">
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
    </div>
  </footer>
</template>
