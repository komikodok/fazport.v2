<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Profile from '~/components/Profile.vue'

const openProfile = ref<boolean>(true)

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    const tl = gsap.timeline()
    tl.add([
        gsap.fromTo('#wrapper', 
            { filter: 'blur(0px) brightness(0.1)', },
            { 
                filter: 'blur(0px) brightness(1)',
                ease: 'power1.in'
            }
        ),
        gsap.to('#flashlight', {
            clipPath: `circle(100px at 50px 50px)`,
            filter: 'blur(0px) brightness(1)',
            ease: 'power4'
        }),
        gsap.to('#bg-layer', { 
            zIndex: 0,
        })
    ])
    .to(['#bg-layer', '#flashlight'], {
        backgroundPositionY: '100%',
        duration: 5,
        ease: 'power3',
    })
    .to(['#bg-layer', '#flashlight'], {
        backgroundPositionY: '30%',
        duration: 5,
        ease: 'power3'
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

function handleTouchMove(e: TouchEvent) {
    const touch = e.touches[0];
    if (!touch) return;

    gsap.to('#flashlight', {
        clipPath: `circle(100px at ${touch.clientX}px ${touch.clientY}px)`,
        filter: 'blur(0px) brightness(1)',
        ease: 'power4'
    });
}

</script>

<template>
    <div 
        @mousemove="handleMouseMove" 
        @touchmove="handleTouchMove"
        id="wrapper" 
        class="relative w-screen h-screen overflow-x-hidden"
    >
        
        <div class="w-full h-full">
            <div
                id="bg-layer"
                class="w-full h-full absolute inset-0 bg-no-repeat brightness-[20%] bg-cover z-10"
            >
                <Profile :open-profile="openProfile" @is-open="() => openProfile = !openProfile" />
            </div>

            <div
                id="flashlight"
                class="w-full h-full absolute inset-0 bg-no-repeat flex gap-4 bg-cover"
            >
                <Profile :open-profile="openProfile" @is-open="() => openProfile = !openProfile">
                    <template #profile-content>
                        <div style="background-image: url('/photo-profile.jpeg');" class="flex-shrink-0 bg-cover w-36 h-36"/>
                        <p class="text-center text-sm text-[#7a7067] font-bold">
                            Fullstack Developer<br />
                            I'm a fullstack developer with a strong emphasis on frontend engineering.<br />
                            I specialize in crafting responsive, accessible, and visually engaging user interfaces —<br />
                            bridging functionality and design to deliver seamless digital experiences.
                        </p>
                    </template>
                </Profile>
            </div>

            <div class="absolute top-0 left-0 z-30 p-4 m-2">
                <ul class="flex gap-5">
                    <li class="text-white cursor-pointer">Phone</li>
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
    filter: blur(0) brightness(1);
}

#profile-content {
    font-family: Cinzel;
}
</style>