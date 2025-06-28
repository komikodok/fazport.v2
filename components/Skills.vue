<script setup lang="ts">
import gsap from 'gsap';

const { openSkills } = defineProps<{
    openSkills: boolean
}>()

const emit = defineEmits<{
    (e: 'is-open'): void
}>()

onMounted(() => {
    watch(() => openSkills, () => {
        if (openSkills) {
            gsap.killTweensOf(['#scroll-parchment2', '#text-parchment2'])
            
            const tl = gsap.timeline()
            tl.to('#text-parchment2', { opacity: 0, ease: 'sine.inOut' })
            .to('#scroll-parchment2', {
                opacity: 1,
                top: '50%',
                right: '50%',
                scale: 1,
                rotate: 360,
                ease: 'power1.in',
            })
            .to('#scroll-parchment2', {
                delay: 0.4,
                height: '580px',
                ease: 'power4'
            })
            .to('#skills-content', { opacity: 1, ease: 'power1' })
        } else {
            const tl = gsap.timeline()
            tl.to('#skills-content', { opacity: 0, ease: 'power1' })
            .to('#scroll-parchment2', {
                height: '120px',
                ease: 'power4'
            })
            .to('#scroll-parchment2', {
                opacity: 1,
                scale: 0.1,
                top: 40,
                right: 140,
                rotate: 280,
                ease: 'power1.in',
            })
            .to('#scroll-parchment2', {
                rotation: '+=8',
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            })
            .to('#text-parchment2', { opacity: 1, ease: 'sine.inOut' })
            .to('#text-parchment2', { 
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
        @click="emit('is-open')"
        id="scroll-parchment2"
        style="background-image: url('/scroll-parchment2.png');"
        class="cursor-pointer bg-no-repeat bg-cover max-w-xl w-full h-[120px] flex justify-center items-center translate-x-1/2 -translate-y-1/2 scale-10 opacity-0 absolute bottom-0 right-0 z-10"
    >
        <div 
            id="scroll"
            style="background-image: url('/scroll.png');" 
            class="absolute bg-cover -bottom-8 w-full h-12 scale-y-[-1]" 
        />

        <div id="skills-content" class="w-[85%] h-[85%] flex flex-col text-[#7a7067] translate-y-5 gap-3 px-3">
            <slot name="skills-content"/>
        </div>
    </div>

    <p 
        id="text-parchment2"
        class="absolute top-[70px] right-[100px] opacity-0 text-lg text-yellow-200"
    >
        Parchment 2
    </p>
</template>

<style>
#text-parchment2 {
    font-family: 'Pirata One';
}
</style>
