<script setup lang="ts">
import gsap from 'gsap';

onMounted(() => {
    gsap.to('#phone', {
        skewX: 20
    })
})
</script>

<template>
    <div id="phone" class="mockup-phone border-primary">
        <div class="mockup-phone-camera"></div>
        <div class="mockup-phone-display">
            <img alt="wallpaper" src="https://img.daisyui.com/images/stock/453966.webp"/>
        </div>
    </div>
</template>