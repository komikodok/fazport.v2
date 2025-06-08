<script setup lang="ts">
import gsap from 'gsap';

const mousePosition = reactive({
  x: 0,
  y: 0
})

onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
})

function handleMouseMove(e: MouseEvent) {
  mousePosition.x = e.clientX - 50
  mousePosition.y = e.clientY - 50

  gsap.to('#scroll-paper', {
    clipPath: `circle(100px at ${e.clientX}px ${e.clientY}px)`
  })
}

</script>

<template>
    <div 
        id="scroll-paper-brightness"
        style="background-image: url('/scroll-paper.png');" 
        class="bg-no-repeat bg-cover max-w-xl w-full h-[300px] brightness-[25%] fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 border border-white z-10"
    >
        <div 
            id="scroll-brightness"
            style="background-image: url('/scroll.png');" 
            class="absolute bg-cover -bottom-5 w-full h-16" 
        />
    </div>

    <div 
        id="scroll-paper"
        style="background-image: url('/scroll-paper.png');" 
        class="bg-no-repeat bg-cover max-w-xl w-full h-[300px] fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 border border-white z-10"
    >
        <div 
            id="scroll"
            style="background-image: url('/scroll.png');" 
            class="absolute bg-cover -bottom-5 w-full h-16" 
        />
    </div>
</template>

<style>
#scroll-paper {
    clip-path: circle(100px at 0px 0px);
    filter: blur(0px) brightness(1.5);
}
</style>