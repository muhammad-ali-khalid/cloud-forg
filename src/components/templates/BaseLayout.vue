<script setup>
import NavBar from '../organisms/NavBar.vue'
import BaseHero from '../organisms/BaseHero.vue'
import BaseMain from '../organisms/BaseMain.vue'
import TheCTC from '../organisms/TheCTC.vue'
import TheFooter from '../organisms/TheFooter.vue'
</script>

<template>
  <slot name="navbar">
    <NavBar />
  </slot>
  <div class="mt-[72px]">
    <slot name="hero">
    </slot>
  </div>
  <slot name="main">
  </slot>
  <slot name="ctc">
    <TheCTC />
  </slot>
  <slot name="footer">
    <TheFooter />
  </slot>
</template>
