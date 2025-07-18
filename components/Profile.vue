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
            gsap.killTweensOf(['#scroll-parchment', '#text-parchment'])

            const tl = gsap.timeline()
            tl.to('#text-parchment', { opacity: 0, ease: 'sine.inOut' })
            .to('#scroll-parchment', {
                opacity: 1,
                top: '50%',
                right: '50%',
                scale: 1,
                rotate: 360,
                ease: 'power1.in',
            })
            .to('#scroll-parchment', {
                delay: 0.4,
                height: '290px',
                ease: 'power4'
            })
            .to('#profile-content', { opacity: 1, ease: 'power1' })
        } else {
            const tl = gsap.timeline()
            tl.to('#profile-content', { opacity: 0, ease: 'power1' })
            .to('#scroll-parchment', {
                height: '120px',
                ease: 'power4'
            })
            .to('#scroll-parchment', {
                opacity: 1,
                scale: 0.1,
                top: 40,
                right: 40,
                rotate: 280,
                ease: 'power1.in',
            })
            .to('#scroll-parchment', {
                rotation: '+=8',
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            })
            .to('#text-parchment', { opacity: 1, ease: 'sine.inOut' })
            .to('#text-parchment', { 
                rotation: '+=4',
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
        id="scroll-parchment"
        style="background-image: url('/scroll-parchment.png');" 
        class="cursor-pointer bg-no-repeat bg-cover max-w-xl w-full h-[120px] flex justify-center items-center translate-x-1/2 -translate-y-1/2 scale-10 opacity-0 absolute bottom-0 right-0 z-10"
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

    <p 
        id="text-parchment"
        class="absolute top-[70px] right-0 opacity-0 drop-shadow-[0_0_8px_yellow] text-lg text-yellow-200"
    >
        Parchment 1
    </p>
</template>

<style>
#text-parchment {
    font-family: 'Pirata One';
}
</style>