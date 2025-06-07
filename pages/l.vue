<script setup lang="ts">
import gsap from 'gsap'

const mousePosition = reactive({
  x: 0,
  y: 0
})

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)

  gsap.fromTo('#wrapper', 
    { filter: 'blur(0px) brightness(0.2)' },
    { 
        filter: 'blur(0px) brightness(1)',
        ease: 'power1.in'
    }
)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})

function handleMouseMove(e: MouseEvent) {
  mousePosition.x = e.clientX - 50
  mousePosition.y = e.clientY - 50

  gsap.to('#lens', {
    clipPath: `circle(100px at ${e.clientX}px ${e.clientY}px)`
  })
}
</script>

<template>
    <div id="wrapper" class="w-screen h-screen">
        <div class="relative w-full h-full overflow-hidden">
            <div
                id="bg-layer"
                class="absolute inset-0 bg-no-repeat brightness-[50%] blur-[2px] bg-cover flex justify-center items-center"
                style="background-image: url('/forest2.jpeg');"
            >
                <h2 class="text-9xl">THE FUCK</h2>
            </div>
    
            <div
                id="lens"
                class="absolute inset-0 bg-no-repeat brightness-50 bg-cover transition-all blur-[1px] pointer-events-none duration-75"
            />
        </div>
    </div>
</template>

<style>
#bg-layer {
    background-image: url('/forest2.jpeg');
}

#lens {
    background-image: url('/forest2.jpeg');
    clip-path: circle(100px at 0px 0px);
    filter: blur(0px) brightness(1.5);
}
</style>