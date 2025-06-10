<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const endSectionRef = useTemplateRef<(HTMLDivElement)>('end-section');

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const isSmallScreen = window.innerWidth < 640 

  const yValue = isSmallScreen ? -30 : -70

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
    scale: 1.1,
    ease: 'power1.inOut',
    filter: 'blur(6px) brightness(0.05)',
    transformOrigin: 'center center',
    immediateRender: false,
  })
  .to('#tree-left', {
    x: -400,
    scale: 1.5,
    opacity: 0,
    ease: 'power1.inOut',
    filter: 'blur(0px) brightness(0.5)',
    immediateRender: false,
  }, '<')
  .to('#tree-right', {
    x: 400,
    scale: 1.5,
    opacity: 0,
    ease: 'power1.inOut',
    filter: 'blur(1px) brightness(0.5)',
    immediateRender: false,
  }, '<')
  .to('#forest', {
    scale: 1.2,
    filter: 'blur(1px) brightness(0.8)',
    ease: 'power2.out',
    immediateRender: false,
  })
  .to('#forest', {
    x: 100,
    y: yValue,
    ease: 'power2.inOut',
    filter: 'blur(0px) brightness(1)',
  })
  .to('#forest', {
    x: -100,
    y: yValue,
    ease: 'power2.inOut',
    filter: 'blur(0px) brightness(1)',
  })
  .to(['#welcome', '#enter', '#forest'], {
    x: 0,
    y: 0,
    opacity: 1,
    ease: 'power1.inOut',
  })
})

function handleClick() {
  const tl = gsap.timeline();

  tl.to(['#welcome', '#enter', '#scroll-down'], {
    opacity: 0,
    display: 'none',
    duration: 0.6,
    ease: 'power2.inOut',
  })

  .to('#wrapper', {
    duration: 1.2,
    ease: 'power1.in',
    transformOrigin: 'bottom center',
  })

  .to('#wrapper', {
    filter: 'blur(10px) brightness(0)',
  })

  .add(() => {
    navigateTo('/about')
  });
}

</script>


<template>
  <div id="wrapper" class="w-screen h-screen overflow-hidden relative">
    <div 
      id="forest" 
      class="w-full h-[100vh] flex flex-col items-center justify-center gap-6 absolute inset-0 bg-no-repeat bg-cover blur-[6px] brightness-[60%] pointer-events-none"
    >
      <strong id="welcome" class="text-white text-8xl opacity-0">W e l c o m e</strong>

      <button 
        @click.prevent="handleClick" 
        id="enter" 
        class="btn bg-blue-600 hover:bg-blue-700 border-transparent shadow-none text-white opacity-0 z-50 pointer-events-auto"
      >
        Enter
      </button>
    </div>

    <div class="absolute inset-0 w-full h-full pointer-events-none">
      <img id="tree-right" src="/tree-right.png" alt="Tree1" class="object-cover h-full absolute -right-62 max-lg:hidden blur-[1px] scale-120 brightness-[7%] z-10">
      <img id="tree-left" src="/tree-left.png" alt="Tree2" class="object-cover h-full absolute -left-62 max-lg:-left-96 blur-[1px] scale-120 brightness-[7%] z-10">
    </div> 

    <div class="absolute bottom-0 right-1/2 opacity-80 animate-bounce flex flex-col gap-3 justify-center items-center translate-x-1/2 my-3">
      <button 
        id="scroll-down"
        @click="() => endSectionRef?.scrollIntoView({behavior: 'smooth'})" 
        class="w-7 h-7 text-base-200 cursor-pointer animate-pulse flex justify-center items-center rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
        </svg>
      </button>
    </div>
  </div>

  <div ref="end-section"></div>
</template>

<style>
#welcome {
  font-family: Lobster;
}

#enter {
  font-family: Poppins;
}

#forest {
  background-image: url('/forest.jpeg');
}
</style>
