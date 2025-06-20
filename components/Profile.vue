<script setup lang="ts">
import gsap from 'gsap';

const { openProfile } = defineProps<{
    openProfile: boolean
}>()

const emit = defineEmits<{
    (e: 'is-open'): void
}>()

onMounted(() => {
    watch(() => openProfile, () => {
        if (openProfile) {
            gsap.killTweensOf('#scroll-paper')

            const tl = gsap.timeline()
            tl.to('#scroll-paper', {
                opacity: 1,
                right: '50%',
                top: '50%',
                x: '50%',
                y: '-50%',
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
        } else {
            const tl = gsap.timeline()
            tl.to('#profile-content', { opacity: 0, ease: 'power1' })
            .to('#scroll-paper', {
                height: '120px',
                ease: 'power4'
            })
            .to('#scroll-paper', {
                opacity: 1,
                scale: 0.1,
                top: 40,
                right: 20,
                x: '50%',
                y: '-50%',
                rotate: 280,
                ease: 'power1.in',
            })
            .to('#scroll-paper', {
                rotation: '+=8',
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            })
        }
    }, { immediate: true })
})
</script>

<template>
    <div 
        @click.prevent="emit('is-open')"
        id="scroll-paper"
        style="background-image: url('/scroll-paper.png');" 
        class="cursor-pointer bg-no-repeat bg-cover max-w-xl w-full h-[120px] flex justify-center items-center scale-10 opacity-0 absolute bottom-0 right-0 z-10"
    >
        <div 
            id="scroll"
            style="background-image: url('/scroll.png');" 
            class="absolute bg-cover -bottom-5 w-full h-14" 
        />

        <div id="profile-content" class="w-[85%] h-[70%] opacity-0 text-[#7a7067] translate-y-3 flex gap-3 items-center justify-between">
            <slot name="profile-content" />
        </div>
    </div>
</template>

<style>

</style>