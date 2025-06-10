<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Profile from '~/components/Profile.vue'

const flashlightState = ref<boolean>(false);

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    const tl = gsap.timeline()
    tl.fromTo('#wrapper', 
        { filter: 'blur(0px) brightness(0.2)', },
        { 
            filter: 'blur(0px) brightness(1)',
            ease: 'power1.in'
        }
    )
    tl.to(['#bg-layer', '#flashlight'], {
        backgroundPositionY: '100%',
        duration: 5,
        ease: 'power1'
    })
})

function handleMouseMove(e: MouseEvent) {
    e.preventDefault()

    gsap.to('#flashlight', {
        clipPath: `circle(100px at ${e.clientX}px ${e.clientY}px)`,
        filter: 'blur(0px) brightness(1)',
        ease: 'power4'
    })
}

function handleFlashlight() {
    flashlightState.value = !flashlightState.value
}
</script>

<template>
    <div @mousemove="handleMouseMove" id="wrapper" class="relative w-screen h-screen overflow-x-hidden">
        
        <div class="w-full h-full">
            <div
                id="bg-layer"
                class="w-full h-full absolute inset-0 bg-no-repeat brightness-[20%] bg-cover"
            >
                <Profile />
            </div>

            <div
                v-if="flashlightState"
                id="flashlight"
                class="w-full h-full absolute inset-0 bg-no-repeat bg-cover"
            >
                <Profile />
            </div>

            <div class="absolute top-0 left-0 z-30 p-4 m-2">
                <ul class="flex gap-5">
                    <li class="text-white cursor-pointer">Phone</li>
                    <li @click.prevent="handleFlashlight" class="text-white cursor-pointer">Flashlight</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
#bg-layer {
    background-image: url('/forest2.jpeg');
}

#flashlight {
    background-image: url('/forest2.jpeg');
    clip-path: circle('100px at 0px 0px');
    filter: blur(0) brightness(1);
}
</style>