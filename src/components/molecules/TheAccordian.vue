<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const activeIndex = ref(null)

function toggle(index) {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <div class="w-full flex flex-col gap-4 m-6 md:w-4/5">
    <div v-for="(item, index) in items" :key="index">
      <div @click="toggle(index)" class="bg-[#EAEAEA] p-3 hover:cursor-pointer flex gap-2">
        <span>
          {{ activeIndex === index ? '⌄' : '>' }}
        </span>
        <span class="text-md md:text-lg font-medium">{{ item.heading }}</span>
      </div>
      <div v-if="activeIndex === index" class="bg-[#F3FAFF] text-md md:text-lg text-black p-3">
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>
