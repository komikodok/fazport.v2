<script setup lang="ts">
import gsap from 'gsap';

const { openProfile } = defineProps<{
    openProfile: boolean
}>()

const emit = defineEmits<{
    (e: 'profile-state', state: boolean): void
}>()

onMounted(() => {
    const tl = gsap.timeline()
    tl.to('#scroll-paper', {
        opacity: 1,
        right: '50%',
        bottom: '50%',
        scale: 1,
        rotate: 360,
        ease: 'power1.in',
    })
    .to('#scroll-paper', {
        delay: 0.4,
        height: '290px',
        ease: 'power4'
    })
    .to('#profile-content', { opacity: 1, ease: 'power1' })
})

function handleClick() {
    if (openProfile) {
        const tl = gsap.timeline()
        tl.to('#profile-content', { opacity: 0, ease: 'power1' })
        .to('#scroll-paper', {
            height: '120px',
            ease: 'power4'
        })
        .to('#scroll-paper', {
            opacity: 0.5,
            right: '80px',
            bottom: '32px',
            scale: 0.2,
            rotate: 360,
            ease: 'power1.in',
        })
    } else {
        const tl = gsap.timeline()
        tl.to('#scroll-paper', {
            opacity: 1,
            right: '50%',
            bottom: '50%',
            scale: 1,
            rotate: 360,
            ease: 'power1.in',
        })
        .to('#scroll-paper', {
            delay: 0.4,
            height: '290px',
            ease: 'power4'
        })
        .to('#profile-content', { 
            opacity: 1, 
            ease: 'power1',
        })
    }
}
</script>

<template>
    <div 
        @click.prevent="handleClick"
        id="scroll-paper"
        ref="scroll-paper"
        style="background-image: url('/scroll-paper.png');" 
        class="bg-no-repeat bg-cover max-w-xl w-full h-[120px] flex justify-center items-center opacity-50 scale-20 absolute bottom-8 right-20 translate-x-1/2 translate-y-1/2 z-10"
    >
        <div 
            id="scroll"
            style="background-image: url('/scroll.png');" 
            class="cursor-pointer absolute bg-cover -bottom-5 w-full h-14" 
        />

        <div id="profile-content" class="w-[85%] h-[70%] opacity-0 translate-y-3 flex gap-3 items-center justify-between">
            <slot name="profile-content"/>
        </div>
    </div>
</template>

<style>

</style>