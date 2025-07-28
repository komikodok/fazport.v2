<script setup lang="ts">
</script>

<template>
    <div class="absolute inset-0">
        <!-- Phone Header -->
        <div class="w-full h-1/2 bg-/50 px-3 py-8">
            <p class="text-3xl text-white">
                15:09
            </p>
            <h2 class="text-xs text-white">Sun, 27 July</h2>
        </div>

        <!-- Phone Apps -->
        <div class="w-full h-1/2 grid grid-cols-4 justify-items-center py-10">
            <div class="col-start-2 row-start-1 flex flex-col gap-1 justify-center items-center">
                <div class="cursor-pointer w-9 h-9 rounded-lg bg-green-600 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-white">
                        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                    </svg>
                </div>
                <p class="text-white text-xs">Contact</p>
            </div>
            
            <div class="col-start-3 row-start-3 flex flex-col gap-1 justify-center items-center">
                <div 
                    class="cursor-pointer w-9 h-9 rounded-lg bg-cover flex justify-center items-center"
                    style="background-image: url('/forest3.jpeg'); background-position: center;"
                >
                    <img src="/assistant-normal.png" alt="Assistant">
                </div>
                <p class="text-white text-xs">Assistant</p>
            </div>
        </div>
    </div>
</template>