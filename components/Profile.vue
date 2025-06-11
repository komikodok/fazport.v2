<script setup lang="ts">
import gsap from 'gsap';

onMounted(() => {
    const tl = gsap.timeline()
    tl.to('#scroll-paper', {
        opacity: 1,
        right: '50%',
        bottom: '50%',
        scale: 1,
        rotate: 0,
        ease: 'power1.in'
    })
    .to('#scroll-paper', {
        delay: 1,
        height: '290px',
        ease: 'power4'
    })
})
</script>

<template>
    <div 
        id="scroll-paper"
        ref="scroll-paper"
        style="background-image: url('/scroll-paper.png');" 
        class="bg-no-repeat bg-cover max-w-xl w-full h-[120px] flex justify-center items-center opacity-50 scale-20 rotate-50 absolute bottom-5 right-0 translate-x-1/2 translate-y-1/2 z-10"
    >
        <div 
            id="scroll"
            style="background-image: url('/scroll.png');" 
            class="absolute bg-cover -bottom-5 w-full h-14" 
        />

        <slot></slot>
    </div>
</template>

<style>

</style>