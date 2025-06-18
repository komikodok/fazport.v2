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
            gsap.killTweensOf('#scroll-paper2')
            
            const tl = gsap.timeline()
            tl.to('#scroll-paper2', {
                opacity: 1,
                right: '50%',
                top: '50%',
                x: '50%',
                y: '-50%',
                scale: 1,
                rotate: 360,
                ease: 'power1.in',
            })
            .to('#scroll-paper2', {
                delay: 0.4,
                height: '580px',
                ease: 'power4'
            })
            .to('#skills-content', { opacity: 1, ease: 'power1' })
        } else {
            const tl = gsap.timeline()
            tl.to('#skills-content', { opacity: 0, ease: 'power1' })
            .to('#scroll-paper2', {
                height: '120px',
                ease: 'power4'
            })
            .to('#scroll-paper2', {
                opacity: 1,
                scale: 0.1,
                top: 40,
                right: 80,
                x: '50%',
                y: '-50%',
                rotate: 280,
                yoyo: true,
                ease: 'power1.in',
            })
            .to('#scroll-paper2', {
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
        @click="emit('is-open')"
        id="scroll-paper2"
        style="background-image: url('/scroll-paper2.png');"
        class="bg-no-repeat bg-cover max-w-xl w-full h-[120px] flex justify-center items-center scale-10 opacity-0 absolute bottom-0 right-0 z-10"
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
</template>