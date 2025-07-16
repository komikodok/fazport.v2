<script setup lang="ts">

const openCarousel = ref<boolean>(true)

</script>

<template>
  <ProjectCarousel :is-open="openCarousel" class="bg-black/40"/>
</template>