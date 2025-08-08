<script setup lang="ts">
import gsap from 'gsap'

const isMobile = ref(false)

onMounted(() => {
  if (window.innerWidth <= 1000) {
    isMobile.value = true
 
  }
    nextTick(() => {
    })
})

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/leaf.png',
    }
  ]
})
</script>

<template>
  <div>
    <div
      v-if="isMobile"
      id="mobile-warning"
      class="fixed inset-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center text-center p-4 z-[99999]"
      style="font-family: Poppins; background-image: url('/forest.jpeg'); background-position: center;"
    >
      <p class="text-lg text-white font-semibold mb-2">
        Mobile not supported.
      </p>
      <p class="text-sm opacity-80">
        Please open it on a laptop or dekstop for the best experience.
      </p>
    </div>

    <NuxtPage v-else />
  </div>
</template>

<style>
html, body {
  overflow-x: hidden;
}
</style>
