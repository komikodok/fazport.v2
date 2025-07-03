<!-- ProjectJourney.vue -->
<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.utils.toArray('.project-card').forEach((el: any, index) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        end: 'top 60%',
        scrub: true,
      },
      opacity: 0,
      y: 100,
      scale: 0.9,
      duration: 1.2,
      ease: 'power2.out'
    })
  })

  // Parallax background
  gsap.to('#forest-bg', {
    backgroundPositionY: '60%',
    scrollTrigger: {
      trigger: '#project-journey',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    }
  })
})
</script>

<template>
  <div id="project-journey" class="relative w-screen min-h-[300vh] overflow-x-hidden">
    <!-- Background -->
    <div
      id="forest-bg"
      class="fixed inset-0 bg-cover bg-center -z-10"
      style="background-image: url('/forest2.jpeg'); background-position-y: 0%;"
    />

    <!-- Jalan -->
    <div class="fixed bottom-0 left-1/2 -translate-x-1/2 w-48 h-[300vh] bg-gradient-to-t from-[#3d2917] to-transparent -z-10 opacity-30 rounded-full blur-md" />

    <!-- Project Cards -->
    <div class="pt-[100vh] space-y-96 px-8">
      <div v-for="n in 5" :key="n" class="project-card bg-white/10 border border-yellow-200 text-yellow-100 p-8 rounded-xl max-w-2xl mx-auto backdrop-blur-sm shadow-lg">
        <h2 class="text-3xl font-bold mb-2">Project {{ n }}</h2>
        <p>This is a brief description of project {{ n }} that appears as you scroll through the forest path.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#forest-bg {
  background-attachment: fixed;
}
</style>
