<script setup lang="ts">
import gsap from 'gsap';

const openPhone = ref<boolean>(false)
const isSleepMode = ref<boolean>(true)

provide('open-phone', openPhone)

let tl: gsap.core.Timeline

watch(openPhone, () => phoneAnimate())

function phoneAnimate() {
    if (openPhone.value) {
        tl = gsap.timeline()

        tl.to('#phone', {
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            scale: 1,
            filter: 'drop-shadow(0 0 8px white)',
            ease: 'power1'
        })
    } else {
        tl = gsap.timeline()

        tl.to('#phone', {
            top: '-240px',
            left: '130px',
            x: 0,
            y: 0,
            scale: 0.15,
            ease: 'power4'
        })
    }
}
 
function sleepModeAnimate() {
    isSleepMode.value = !isSleepMode.value

    if (isSleepMode.value) {
        tl = gsap.timeline()
        
        tl.to('.sleep-mode', {
            opacity: 1,
            height: '50.3%',
            ease: 'power2.inOut',
            onComplete: () => {
                gsap.fromTo('.boot-flash', 
                    { width: '40px', height: '40px', ease: 'power1.inOut' },
                    { width: '0px', height: '0px', ease: 'power4' }
                )
            }
        })
    } else {
        tl = gsap.timeline()
        
        tl.to('.sleep-mode', {
            opacity: 0,
            ease: 'power2.inOut',
        })
        .to('.sleep-mode', {
            height: '0%'
        })
    }
}
</script>

<template>
    <div class="overlay fixed inset-0 bg-black/50"></div>
    <!-- top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_8px_white] -->
    <div 
        id="phone"
        class="w-72 h-[600px] scale-15 absolute -top-[240px] left-[130px] p-2 rounded-4xl"
        :class="openPhone ? 'pointer-events-none' : 'pointer-events-auto cursor-pointer'"
        @click="openPhone = true"
    >
        <div 
            class="w-full h-[90%] border-6 border-zinc-900 bg-cover bg-zinc-900 ring-2 ring-slate-400 rounded-3xl relative"
            style="background-image: url('/walpaper.jpeg');"
            >
            
            <!-- Phone Button -->
            <div class="absolute top-18 -right-3 w-1 h-17 bg-zinc-800 rounded-r-4xl"></div>
            <div @click.stop="sleepModeAnimate" class="absolute cursor-pointer pointer-events-auto top-40 -right-3 w-1 h-9 bg-zinc-800 rounded-r-4xl"></div>

            <!-- Sleep/Off Mode -->
            <div class="w-full h-full flex flex-col relative">
                <div 
                    class="sleep-mode w-full h-[50.3%] absolute top-0 rounded-t-2xl"
                    style="background-image: linear-gradient(to bottom right, black, black, black, #09090b, black);"
                />
                <div
                    class="sleep-mode w-full h-[50.3%] absolute bottom-0 bg-black rounded-b-2xl"
                    style="background-image: linear-gradient(to top left, black, black, black, #09090b, black);"
                />

                <div class="boot-flash absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-0 h-0 bg-white blur-xs drop-shadow-[0_0_8px_white]"></div>
            </div>

            <PhoneScreen class=" pointer-events-auto" :is-sleep-mode="isSleepMode"/>

             <!-- Camera -->
            <div class="absolute top-2 left-2 w-5 h-5 flex justify-center items-center rounded-full bg-zinc-950">
                <div 
                    class="w-3 h-3 rounded-full" 
                    style="background-image: linear-gradient(to top left, #18181b, #09090b, #18181b, #18181b);"
                />
            </div>
        </div>
    </div>
</template>