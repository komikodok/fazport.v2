<script setup lang="ts">
import gsap from 'gsap';

const isSleepMode = ref<boolean>(false)

let tl: gsap.core.Timeline

function phoneModeAnimate() {
    isSleepMode.value = !isSleepMode.value

    if (isSleepMode.value) {
        tl = gsap.timeline()
        
        tl.to('.sleep-mode', {
            opacity: 1,
            height: '50%',
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
    <div class="fixed inset-0 bg-black/50"></div>
    <div 
        class="w-72 h-[600px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_8px_white] p-2 rounded-4xl"
    >
        <div 
            class="w-full h-[500px] border-6 bg-cover bg-zinc-900 ring-2 ring-slate-400 rounded-3xl relative"
            style="background-image: url('/walpaper.jpeg');"
            >
            
            <!-- Phone Button -->
            <div class="absolute top-18 -right-3 w-1 h-17 bg-zinc-800 rounded-r-4xl"></div>
            <div @click="phoneModeAnimate" class="absolute cursor-pointer top-40 -right-3 w-1 h-9 bg-zinc-800 rounded-r-4xl">
                <div class="absolute -right-12 w-10 h-10 bg-white"></div>
            </div>

            <!-- Sleep/Off Mode -->
            <div class="w-full h-full flex flex-col relative">
                <div 
                    class="sleep-mode w-full h-[0%] absolute top-0 rounded-t-2xl"
                    style="background-image: linear-gradient(to bottom right, black, black, black, #09090b, black);"
                />
                <div
                    class="sleep-mode w-full h-[0%] absolute bottom-0 bg-black rounded-b-2xl"
                    style="background-image: linear-gradient(to top left, black, black, black, #09090b, black);"
                />

                <div class="boot-flash absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-0 h-0 bg-white blur-xs drop-shadow-[0_0_8px_white]"></div>
            </div>

            <PhoneScreen :is-sleep-mode="isSleepMode"/>

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