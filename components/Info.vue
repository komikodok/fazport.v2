<script setup lang="ts">
import gsap from 'gsap'

const { detail } = defineProps<{
    detail?: string
}>()

const showInfo = ref(false)

onMounted(() => {
  gsap.to('#info', {
    rotation: '+=5',
    repeat: -1,
    yoyo: true,
    ease: 'linear',
  })
})
</script>

<template>
  <div
    id="info"
    class="w-24 h-24 cursor-pointer flex flex-col gap-3 justify-center items-center absolute top-2 left-32 z-50"
    style="font-family: Pirata One;"
    @mouseenter="showInfo = true"
    @mouseleave="showInfo = false"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      stroke-width="1.5" stroke="currentColor"
      class="size-8 text-yellow-200 drop-shadow-[0_0_6px_yellow] animate-pulse">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 
        1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 
        0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>

    <h2 class="text-xl text-yellow-200 drop-shadow-[0_0_9px_yellow]">Info</h2>
  </div>

  <div
    class="absolute top-26 left-16 w-62 p-4 text-sm text-yellow-100 bg-black/50 rounded-lg shadow-lg backdrop-blur-sm border border-yellow-500 transition-all duration-700"
    :class="showInfo ? 'opacity-100 scale-100' : 'opacity-0 scale-90'"
    @mouseenter="showInfo = true"
    @mouseleave="showInfo = false"
    style="font-family: Pirata One; transform-origin: top;"
  >
    <p>
        <span class="block text-base text-yellow-300 mb-1">⚠️ Helpful Tip</span>
        If the animations aren't casting properly,<br>
        try refreshing with <span class="font-bold text-yellow-200">CTRL + SHIFT + R</span>.
    </p>
    <p class="block text-base text-yellow-300 mb-1">{{ detail }}</p>
  </div>
</template>
