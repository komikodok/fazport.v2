<script setup lang="ts">
import gsap from 'gsap'

const { openSkills, openProfile } = defineProps<{
    openSkills: boolean,
    openProfile: boolean
}>()

const emit = defineEmits<{
    (e: 'is-open'): void
}>()

onMounted(() => {
    watch(() => [openSkills, openProfile], ([s, p]) => {
        animateSkills(s, p)
    }, { immediate: true })
})

function animateSkills(s: boolean, p: boolean) {
  gsap.killTweensOf(['#scroll-parchment2', '#text-parchment2'])

  const tl = gsap.timeline()

  if (s) {
    tl.to('#text-parchment2', { opacity: 0, ease: 'sine.inOut' })
    .to('#scroll-parchment2', {
        x: p ? '-75%' : '0%',
        top: 'auto',
        right: 'auto',
        scale: 1,
        rotate: 0,
        opacity: 1,
        ease: 'power1.in'
    })
    .to('#scroll-parchment2', {
        height: '490px',
        ease: 'power4'
    })
    .to('#skills-content', { opacity: 1, ease: 'power1' })
  } else {
    tl.to('#skills-content', { opacity: 0, ease: 'power1' })
    .to('#scroll-parchment2', {
        height: '110px',
        ease: 'power4'
    })
    .to('#scroll-parchment2', {
        x: 0,
        scale: 0.15,
        top: -5,
        right: 0,
        rotate: 280,
        opacity: 1,
        ease: 'power1.in'
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
}

</script>

<template>
    <div
        @click="emit('is-open')"
        id="scroll-parchment2"
        style="background-image: url('/scroll-parchment2.png')"
        class="cursor-pointer bg-no-repeat bg-cover absolute top-[100%] rotate-90 opacity-0 scale-[18%] max-w-sm w-full h-[100px] flex justify-center items-center"
    >
        <div 
            id="scroll"
            style="background-image: url('/scroll.png')" 
            class="absolute bg-cover -bottom-5 w-full h-[40px]" 
        />

        <div id="skills-content" class="w-[85%] h-[85%] flex flex-col text-[#7a7067] translate-y-5 gap-3 px-3">
            <slot name="skills-content"/>
        </div>
    </div>

    <p 
        id="text-parchment2"
        class="absolute top-22 right-38 opacity-0 drop-shadow-[0_0_8px_yellow] text-lg text-yellow-200"
        style="font-family: Pirata One"
    >
        Parchment 2
    </p>
</template>
