<script setup lang="ts">
</script>

<template>
    <div
        style="background-image: url('/scroll-paper2.png');"
        class="bg-no-repeat bg-cover max-w-md w-full h-[580px] flex justify-center items-center absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 z-10"
    >
        <div 
            id="scroll"
            style="background-image: url('/scroll.png');" 
            class="absolute bg-cover -bottom-8 w-full h-12 scale-y-[-1]" 
        />

        <div id="skills-content" class="w-[85%] h-[85%] flex flex-col text-[#7a7067] translate-y-5 gap-3">
            <slot name="skills-content"/>
        </div>
    </div>
</template>