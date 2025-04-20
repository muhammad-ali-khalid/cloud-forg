<template>
  <div class="w-full h-auto flex flex-col md:flex-row">
    <div class="md:w-1/2">
      <slot name="left"></slot>
    </div>
    <div class="md:w-1/2">
      <slot name="right"></slot>
    </div>
  </div>
</template>
