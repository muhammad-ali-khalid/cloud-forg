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
  <div class="w-full flex flex-col gap-4 m-2">
    <div v-for="(item, index) in items" :key="index" class="bg-[#EAEAEA]">
      <button @click="toggle(index)" class="w-full flex gap-2">
        <span>
          {{ activeIndex === index ? '⌄' : '>' }}
        </span>
        <span class="text-xl">{{ item.heading }}</span>
      </button>
      <div v-if="activeIndex === index" class="bg-[#F3FAFF] text-black">
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>
