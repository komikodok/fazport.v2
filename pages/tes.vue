<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const rotation = ref(0)
const totalItems = 6
const angle = 360 / totalItems

onMounted(() => {
  const items = document.querySelectorAll('.box')

  items.forEach((el, index) => {
    const rotate = index * angle
    gsap.set(el, {
      rotateY: rotate,
      transformOrigin: 'center center',
      transform: `rotateY(${rotate}deg) translateZ(200px)`,
    })
  })
})

function handleNextClick() {
  rotation.value += angle
  gsap.to('.slider', {
    rotateY: rotation.value,
    ease: 'power1.inOut',
    duration: 1
  })
}

function handlePrevClick() {
  rotation.value -= angle
  gsap.to('.slider', {
    rotateY: rotation.value,
    ease: 'power1.inOut',
    duration: 1
  })
}
</script>

<template>
  <div class="w-screen h-screen bg-red-200 flex flex-col items-center justify-center">
    <div
      class="relative w-[400px] h-[400px]"
      style="perspective: 1000px"
    >
      <div
        class="slider relative w-full h-full"
        style="transform-style: preserve-3d;"
      >
        <div
          v-for="n in totalItems"
          :key="n"
          class="box absolute top-1/2 left-1/2 w-20 h-20 bg-cyan-300 border flex justify-center items-center text-xl font-bold"
        >
          {{ n }}
        </div>
      </div>
    </div>

    <div class="flex gap-8 mt-6 text-4xl">
      <div @click="handlePrevClick" class="cursor-pointer border p-2 rounded-full"><</div>
      <div @click="handleNextClick" class="cursor-pointer border p-2 rounded-full">></div>
    </div>
  </div>
</template>
