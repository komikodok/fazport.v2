<script setup lang="ts">
import gsap from 'gsap';
import type IProjects from '~/types/projects.type';

const props = defineProps<IProjects>()

const cardRef = useTemplateRef<(HTMLDivElement)>('card')

function handleClick() {
  gsap.to(cardRef.value, {
    rotateY: "+=180",
  })
}

</script>

<template>
    <div 
      @click="handleClick"
      ref="card"
      class="w-72 h-80 border-[0.1px] border-[#c4b7a7] rounded-xl flex flex-col overflow-hidden"
      :class="props.open && 'shadow-[0_0_40px_#c4b7a7]'"
      style="background-image: linear-gradient(to top left, #eee7db, #c4b7a5, #eee7db, #eee7db, #eee7db);"
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
</style>