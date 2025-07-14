<script setup lang="ts">
import type IProjects from '~/types/projects.type';

const props = defineProps<IProjects>()
</script>

<template>
    <div 
      class="card w-72 h-82 border-[0.1px] border-[#c4b7a7] rounded-xl flex flex-col overflow-hidden"
      :class="props.open && 'shadow-[0_0_40px_#c4b7a7]'"
    >
        <h2 class="title text-2xl text-center text-[#5f5145] p-4 w-full h-32">{{ props.title }}</h2>
        <img 
          :src="props.image"
          class="flex-shrink-0 w-full h-32 object-contain"
        >
    </div>
</template>

<style>
.title {
  font-family: 'Pirata One';
}

.card {
  background-image: linear-gradient(to top left, #eee7db, #c4b7a5, #eee7db, #eee7db, #eee7db);
}
</style>