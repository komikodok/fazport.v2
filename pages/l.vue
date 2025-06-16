<script setup lang="ts">
import gsap from 'gsap';

onMounted(() => {
  gsap.to('#mask', { scale: 200, ease: 'power1', duration: 15, delay: 2 })
})
</script>

<template>
<div class="w-screen h-screen relative overflow-hidden">
  <div style="background-image: url('/forest.jpeg');" class="flex justify-center items-center bg-cover absolute w-full h-full -z-10 inset-0">
    <h2 class="text-9xl text-pink-100 absolute">Woi</h2>
  </div>
  
  <div id="mask" class="w-full h-full flex justify-center items-center bg-white mix-blend-screen">
    <h2 class="text-9xl">Hi.</h2>
  </div>
</div>

  <!-- <div class="w-screen h-screen">
    <img src="/forest.jpeg" alt="">
    <div class="mask">
      <h2 class="text-9xl">Hi.</h2>
    </div>
  </div> -->
</template>

<style>
* {
  font-family: Lobster;
}

.mask {
  height: 100vh;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  mix-blend-mode: screen;
}

img {
  position: fixed;
  z-index: -1;
  inset: 0;
  height: 100%;
  width: 100%;
}
</style>