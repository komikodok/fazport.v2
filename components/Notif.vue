<script setup lang="ts">
import gsap from 'gsap';

onMounted(() => {
  const gradient = { deg: 0 }

  gsap.to(gradient, {
    deg: 360,
    duration: 2,
    repeat: -1,
    ease: 'linear',
    onUpdate: () => {
      const el = document.getElementById('loading')
      if (el) {
        el.style.backgroundImage = `conic-gradient(from ${gradient.deg}deg, transparent, yellow, transparent, transparent, transparent, yellow, transparent, transparent, transparent)`
        // el.style.backgroundImage = `conic-gradient(from ${gradient.deg}deg, transparent 90%, yellow, transparent)`
      }
    }
  })
})
</script>

<template>
    <div class="fixed top-1/2 left-1/2 z-50 flex flex-col backdrop-blur-sm text-white p-1 rounded-xl shadow-lg -translate-x-1/2 -translate-y-1/2">
        <div id="loading" class="w-full h-full absolute rounded-xl inset-0 -z-10"></div>
        <div class="w-full h-full bg-black rounded-xl px-6 py-4">
            <slot />
        </div>
    </div>
</template>
