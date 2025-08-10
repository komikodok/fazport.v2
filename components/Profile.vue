<script setup lang="ts">
import gsap from 'gsap'

const { openProfile, openSkills } = defineProps<{
    openProfile: boolean,
    openSkills: boolean
}>()

const emit = defineEmits<{
    (e: 'is-open'): void
}>()

onMounted(() => {
    watch(() => [openProfile, openSkills], ([p, s]) => {
        animateProfile(p, s)
    }, { immediate: true })
})

function animateProfile(p: boolean, s: boolean) {
    gsap.killTweensOf(['#scroll-parchment', '#text-parchment'])
    const tl = gsap.timeline()

    if (p) {
        tl.to('#text-parchment', { opacity: 0, ease: 'sine.inOut' })
        .to('#scroll-parchment', {
            x: s ? '75%' : '0%',
            top: 'auto',
            right: 'auto',
            scale: 1,
            rotate: 0,
            opacity: 1,
            ease: 'power1.in'
        })
        .to('#scroll-parchment', { height: '230px', ease: 'power4' })
        .to('#profile-content', { opacity: 1, ease: 'power1' })
    } else {
        tl.to('#profile-content', { opacity: 0, ease: 'power1' })
        .to('#scroll-parchment', { height: '120px', ease: 'power4' })
        .to('#scroll-parchment', {
            x: 0,
            scale: 0.13,
            top: -10,
            right: -150,
            rotate: 280,
            opacity: 1,
            ease: 'power1.in'
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
}
</script>

<template>
    <!-- translate-x-3/4 h230px -->
    <div 
        @click="emit('is-open')"
        id="scroll-parchment"
        style="background-image: url('/scroll-parchment.png')" 
        class="cursor-pointer absolute top-[100%] right-0 scale-[15%] rotate-90 bg-no-repeat bg-cover max-w-md w-full h-[120px] flex justify-center items-center z-10"
    >
        <div 
            id="scroll"
            style="background-image: url('/scroll.png')" 
            class="absolute bg-cover -bottom-5 w-full h-[47px]" 
        />

        <div id="profile-content" class="w-[85%] h-[70%] opacity-0 flex gap-2 items-center translate-y-3 py-4">
            <slot name="profile-content" />
        </div>
    </div>

    <p 
        id="text-parchment"
        class="absolute top-22 right-9 opacity-0 drop-shadow-[0_0_8px_yellow] text-lg text-yellow-200"
        style="font-family: Pirata One"
    >
        Parchment 1
    </p>
</template>