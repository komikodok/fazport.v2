<template>
  <div
    id="map"
    style="background-image: url('/map.png');"
    class="cursor-pointer bg-no-repeat bg-cover max-w-2xl w-full h-92 flex justify-center items-center absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 z-10"
  >
    <!-- Home -->
    <div class="flex flex-col gap-2 justify-center items-center absolute bottom-[75px] left-[280px]">
      <div class="w-2.5 h-2.5 rounded-full bg-black/60 shadow-md"></div>
      <h2 class="text-lg font-extrabold text-black">Home</h2>
    </div>

    <!-- About -->
    <div class="flex flex-col gap-2 justify-center items-center absolute bottom-[120px] right-[90px]">
      <div class="w-2.5 h-2.5 rounded-full bg-black/60 shadow-md"></div>
      <h2 class="text-lg font-extrabold text-black">About</h2>
    </div>
  </div>
</template>