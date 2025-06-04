<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#wrapper',
      start: 'top top',
      end: '+=250%',
      pin: true,
      scrub: 2,
    }
  })

  tl.to('#forest', {
    scale: 1,
    ease: 'power1.inOut',
    filter: 'blur(6px) brightness(0.1)',
    transformOrigin: 'center center',
    immediateRender: false,
  })
  .to('#tree-left', {
    x: -400,
    scale: 1.5,
    ease: 'power1.inOut',
    filter: 'blur(0px) brightness(0.5)',
    immediateRender: false,
  }, '<')
  .to('#tree-right', {
    x: 400,
    scale: 1.5,
    ease: 'power1.inOut',
    filter: 'blur(1px) brightness(0.5)',
    immediateRender: false,
  }, '<')
  .to('#forest', {
    filter: 'blur(1px) brightness(0.8)',
    ease: 'power2.out',
    immediateRender: false,
  })
  .to('#welcome', {
    opacity: 1,
    ease: 'power1.inOut',
  })
  .to('#forest', {
    filter: 'blur(0px) brightness(1)',
  })
})
</script>


<template>
  <div id="wrapper" class="w-screen h-screen overflow-hidden">
    <div 
      style="background-image: url('/forest.png');"
      id="forest" 
      class="w-full h-[100vh] scale-120 flex justify-center items-center absolute inset-0 blur-[6px] brightness-[60%] bg-no-repeat bg-cover"
    >
      <strong id="welcome" class="text-white text-8xl opacity-0">W e l c o m e</strong>
    </div>

    <div class="absolute inset-0 w-full h-full">
      <img id="tree-right" src="/tree-right.png" alt="Tree1" class="object-cover h-full absolute -right-62 max-lg:hidden blur-[1px] scale-120 brightness-[10%] z-10">
      <img id="tree-left" src="/tree-left.png" alt="Tree2" class="object-cover h-full absolute -left-62 max-lg:-left-96 blur-[1px] scale-120 brightness-[10%] z-10">
    </div> 
  </div>
</template>

<style>
* {
  font-family: Poppins;
}

</style>
