<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

let tl: gsap.core.Timeline | null = null

onMounted(() => {
    ScrollSmoother.create({
    smooth: 4,
    effects: true
  })

  tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#wrapper',
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: 2
    }
  })

  tl.to('#bg-layer', {
    backgroundPositionY: '100%',
    backgroundPositionX: '100%'
  })
  
}) 
</script>

<template>
  <div id="wrapper" class="w-screen h-screen overflow-hidden relative">
    <div class="w-full h-full bg-black"></div>
    <div 
      id="bg-layer" 
      style="background-image: url('/forest3.png');"
      class="w-full h-[100vh] flex flex-col bg-top items-center justify-center gap-6 absolute inset-0 bg-no-repeat bg-cover pointer-events-none"
    >
    </div>
  </div>
</template>