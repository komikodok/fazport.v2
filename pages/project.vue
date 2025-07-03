<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let tl: gsap.core.Timeline | null = null

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#project',
      pin: true,
      scrub: 2,
      start: 'top top',
      end: '100%'
    }
  })
  
  tl.add([
    
  ])
})
</script>

<template>
  <div
    id="project" 
    class="w-screen h-screen relative overflow-hidden"
  >
    <div
      id="forest3"
      style="background-image: url('/forest5.jpeg'); background-position-y: 40%;"
      class="bg-cover bg-no-repeat bg-center w-full h-full"
    >
    </div>
  </div>
</template>