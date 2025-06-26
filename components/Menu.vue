<script setup lang="ts">
import gsap from 'gsap'

const pinPosition = reactive<{
  top?: number,
  left?: number,
  width?: number,
  height?: number
}>({})

const route = useRoute()

onMounted(() => {

})

function handleClick(e: MouseEvent) {
  const targetEl = e.currentTarget as HTMLElement
  const rect = targetEl.getBoundingClientRect()
  console.log(rect)
  
  pinPosition.top = rect.top
  pinPosition.left = rect.left
  pinPosition.width = rect.width
  pinPosition.height = rect.height

  gsap.to('#map-pin', {
    top: pinPosition.top,
    left: pinPosition.left,
    width: pinPosition.width,
    height: pinPosition.height,
    ease: 'power1'    
  })
}

</script>

<template>
  <div
    id="map"
    ref="map"
    style="background-image: url('/map.png');"
    class="bg-no-repeat bg-cover max-w-2xl w-full h-92 flex justify-center items-center absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 z-10"
  >
    <!-- Home -->
    <div 
      @click.prevent="handleClick"
      class="cursor-pointer border flex flex-col gap-2 justify-center items-center absolute bottom-[75px] left-[280px]"
    >
      <div class="w-2.5 h-2.5 rounded-full bg-black/60 shadow-md"></div>
      <h2 class="text-lg font-extrabold text-black/70 tracking-widest drop-shadow-[2px_2px_1px_rgba(0,0,0,0.3)]">home</h2>
    </div>

    <!-- About -->
    <div 
      @click.prevent="handleClick" 
      class="cursor-pointer border flex flex-col gap-2 justify-center items-center absolute bottom-[150px] left-[550px]"
    >
      <div class="w-2.5 h-2.5 rounded-full bg-black/60 shadow-md"></div>
      <h2 class="text-lg font-extrabold text-black/70 tracking-widest drop-shadow-[2px_2px_1px_rgba(0,0,0,0.3)]">about</h2>
    </div>
  </div>

  <!-- Map Pin -->
  <div id="map-pin" class="absolute z-[999] w-[46px] h-[48px] top-[306.5px] left-[894px] flex justify-center animate-bounce">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10 text-red-500">
      <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
    </svg>
  </div>
</template>

<style>
h2 {
  font-family: 'Pirata One';
}
</style>