<template>
  <div class="bg-blue-900 px-4 py-10 sm:px-8 md:px-16 lg:px-24">
    <form class="max-w-4xl mx-auto flex flex-col gap-6">
      <div class="text-white text-3xl font-black">
        Take the next step towards optimized IT management
      </div>
      <div class="text-white">
        Fill out the form and a GCS Specilist will help you find the managed IT services you need
        for your business
      </div>
      <div class="flex flex-col md:flex-row md:gap-6">
        <div class="flex-1">
          <label class="block text-white font-semibold mb-1"
            >First Name <span class="text-red-500">*</span></label
          >
          <input
            type="text"
            placeholder="First Name"
            class="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div class="flex-1 mt-4 md:mt-0">
          <label class="block text-white font-semibold mb-1"
            >Last Name <span class="text-red-500">*</span></label
          >
          <input
            type="text"
            placeholder="Last Name"
            class="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <div class="flex flex-col md:flex-row md:gap-6">
        <div class="flex-1">
          <label class="block text-white font-semibold mb-1"
            >Company Name <span class="text-red-500">*</span></label
          >
          <input
            type="text"
            placeholder="Company Name"
            class="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div class="flex-1 mt-4 md:mt-0">
          <label class="block text-white font-semibold mb-1"
            >Work Email <span class="text-red-500">*</span></label
          >
          <input
            type="email"
            placeholder="example@email.com"
            class="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <div>
        <label class="block text-white font-semibold mb-1"
          >Phone Number <span class="text-red-500">*</span></label
        >
        <input
          type="tel"
          placeholder="Contact Number *"
          class="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label class="block text-white font-semibold mb-1"
          >Company Zip Code <span class="text-red-500">*</span></label
        >
        <input
          type="text"
          placeholder="Company Zip Code"
          class="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label class="block text-white font-semibold mb-1">How did you hear about us?</label>
        <input
          type="text"
          placeholder="Google (Search Engine)"
          class="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <!-- Submit Button (optional) -->

      <div>
        <button
          class="mt-6 w-full px-2 py-1 md:px-4 md:py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-600 hover:cursor-pointer"
        >
          Get Started
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
// Optional script logic here
</script>
