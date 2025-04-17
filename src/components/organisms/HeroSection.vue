<template>
  <div class="relative w-full h-screen overflow-hidden mt-[72px]">
    <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full md:h-auto object-cover">
      <source src="/hero-vid.webm" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="absolute inset-0 bg-blue-500 opacity-100 mix-blend-multiply"></div>

    <div class="relative z-10 flex flex-col justify-center text-white h-full px-8 pt-24">
      <p class="text-xl md:text-2xl font-bold mb-4">Empowering Your Business Through Technology</p>
      <p class="text-sm md:text-md max-w-xl">
        Revolutionizing business by delivering innovative solutions to your toughest business
        challenges with scalability and simplicity
      </p>
      <button
        class="mt-6 w-40 md:w-50 px-2 py-1 md:px-4 md:py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-600 hover:cursor-pointer"
      >
        What and Why GCS
      </button>
    </div>
  </div>
</template>
