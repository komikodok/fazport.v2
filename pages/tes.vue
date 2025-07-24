<script setup lang="ts">
import gsap from 'gsap';

</script>

<template>
    <div 
        class="w-72 h-[600px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border overflow-hidden p-2 drop-shadow-[0_0_40px_#90a1b9] rounded-4xl"
    >
        <div 
            class="w-full h-[500px] border-6 bor bg-zinc-900 ring-2 ring-slate-400 rounded-3xl relative"
            style="background-image: linear-gradient(to top left, #90a1b9, white, #90a1b9);"
        >
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-5 rounded-b-full bg-zinc-900 flex gap-4 justify-center items-center">
                <div class="bg-slate-700 rounded-full w-8 h-1"></div>
                <div class="bg-slate-700 rounded-full w-1 h-1"></div>
            </div>
            
            <div class="absolute top-20 -right-3 w-1 h-15 bg-zinc-900 rounded-r-4xl"></div>
            <div class="absolute top-40 -right-3 w-1 h-9 bg-zinc-900 rounded-r-4xl"></div>
        </div>
    </div>
</template>