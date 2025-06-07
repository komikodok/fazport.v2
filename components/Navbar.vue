<script setup lang="ts">
import gsap from 'gsap';

onMounted(() => {
    gsap.to('#scroll-paper', {
        height: '112px',
        ease: 'power1.in'
    })
})


</script>

<template>
    <div 
        id="scroll-paper"
        style="background-image: url('/scroll-paper2.png');" 
        class="bg-no-repeat bg-cover w-58 h-15 brightness-[85%] fixed top-2 left-2 z-10"
    >
        <div 
            id="scroll"
            style="background-image: url('/scroll.png');" 
            class="absolute bg-cover -bottom-2 w-full h-6" 
        />
    </div>
</template>

<style>

</style>