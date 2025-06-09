<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Profile from '~/components/Profile.vue'

const mousePosition = reactive({
    x: 0,
    y: 0
})

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    gsap.fromTo('#wrapper', 
        { filter: 'blur(0px) brightness(0.2)' },
        { 
            filter: 'blur(0px) brightness(1)',
            ease: 'power1.in'
        }
    )
})

function handleMouseMove(e: MouseEvent) {
    e.preventDefault()

    gsap.to('#bg-layer', {
        clipPath: `circle(100px at ${e.clientX}px ${e.clientY}px)`,
        filter: 'blur(0px) brightness(1.5)'
    })
}
</script>

<template>
    <div @mousemove="handleMouseMove" id="wrapper" class="relative w-screen h-screen">
        
        <div class="w-full h-full">
            <div
                id="bg-brightness"
                class="w-full h-full absolute inset-0 bg-no-repeat brightness-[50%] bg-cover"
            >
                <Profile />
            </div>

            <div
                id="bg-layer"
                class="w-full h-full absolute inset-0 bg-no-repeat bg-cover"
            >
                <Profile />
            </div>
        </div>
    </div>
</template>

<style>
#bg-brightness {
    background-image: url('/forest2.jpeg');
}

#bg-layer {
    background-image: url('/forest2.jpeg');
    clip-path: circle('100px at 0px 0px');
    filter: blur(0) brightness(1.5);
}
</style>