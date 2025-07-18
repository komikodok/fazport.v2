<script setup lang="ts">
import gsap from 'gsap';
import type IProjects from '~/types/projects.type';

const props = defineProps<IProjects>()

const isOpen = ref<boolean>(false)

const cardRef = useTemplateRef<(HTMLDivElement)>('card')

watch(isOpen, () => animate())

function animate() {
  // if (isOpen.value) {
  //   gsap.to(cardRef.value, {
  //     rotateY: 90,
  //     rotateX: 12,
  //     scale: 1.1,
  //     ease: 'linear'
  //   })
  // } else {
  //   gsap.to(cardRef.value, {
  //     rotateY: 90,
  //     rotateX: -12,
  //     scale: 1,
  //     ease: 'linear'
  //   })
  // }
}

function handleClick() {
  console.log('clicked!')
}

</script>

<template>
    <div 
      ref="card"
      class=" w-64 h-80 border-[0.1px] border-[#c4b7a7] rounded-xl relative overflow-hidden"
      :class="[props.open ? 'shadow-[0_0_40px_#c4b7a7] pointer-events-auto' : 'pointer-events-none']"
      style="background-image: linear-gradient(to top left, #eee7db, #c4b7a5, #eee7db, #eee7db, #eee7db);"
      @click.prevent="handleClick"
    >
      <div class="absolute inset-0 flex flex-col transition-all">
        <h2 class="title text-2xl text-center text-[#5f5145] p-4 w-full h-32">{{ props.title }}</h2>
        <img 
          :src="props.image"
          class="flex-shrink-0 w-full p-3 h-32 object-contain"
        >
      </div>

      <div class="absolute inset-0 flex flex-col transition-all">
        <h2 class="title text-2xl text-center text-[#5f5145] p-4 w-full h-32">{{ props.title }}</h2>
      </div>
    </div>
</template>

<style>
.title {
  font-family: 'Pirata One';
}
</style>