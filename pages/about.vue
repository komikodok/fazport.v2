<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from '~/components/Navbar.vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    gsap.fromTo('#wrapper', 
        { filter: 'blur(0px) brightness(0.2)' },
        { 
            filter: 'blur(0px) brightness(1)',
            ease: 'power1.in'
        }
    )

    const tl = gsap.timeline({
        scrollTrigger: {
        trigger: '#wrapper',
        start: 'top top',
        end: '+=250%',
        pin: true,
        scrub: 2,
        }
    })
    tl.to('#wrapper', { x: -1000, ease: 'power1'})
})
</script>

<template>
    <div id="wrapper" class="relative w-screen h-screen">
        <Navbar />

        <div class="w-full h-full flex">
            <div
                class="bg-layer w-full h-full bg-no-repeat flex-shrink-0 brightness-[70%] blur-[2px] bg-cover flex justify-center items-center"
                style="background-image: url('/forest2.jpeg');"
            />
            <div
                class="bg-layer w-full h-full bg-no-repeat flex-shrink-0 brightness-[70%] blur-[2px] bg-cover flex justify-center items-center"
                style="background-image: url('/forest2.jpeg');"
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