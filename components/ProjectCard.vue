<script setup lang="ts">
import gsap from 'gsap';
import { RouterLink } from 'vue-router';
import type IProjects from '~/types/projects.type';

const props = defineProps<IProjects>()

const openCard = ref<boolean>(false)

let tl: gsap.core.Timeline

const contentCard = useTemplateRef<(HTMLDivElement)>('content-card')
const coverCard = useTemplateRef<(HTMLDivElement)>('cover-card')

watch(openCard, () => animate())

function animate() {
  if (openCard.value) {
    tl = gsap.timeline()

    tl.add([
      gsap.to(coverCard.value, {
        rotateY: 180,
        scale: 1.1,
        ease: 'power1.inOut'
      }),
      gsap.to(contentCard.value, {
        rotateY: 0,
        scale: 1.1,
        ease: 'power1.inOut'
      })
    ])
  } else {
    tl = gsap.timeline()

    tl.add([
      gsap.to(coverCard.value, {
        rotateY: 0,
        scale: 1,
        ease: 'power1.inOut'
      }),
      gsap.to(contentCard.value, {
        rotateY: 180,
        scale: 1,
        ease: 'power1.inOut'
      })
    ])
  }
}
</script>

<template>
  <div 
    ref="card"
    class="transform-3d w-64 h-80 relative"
  > 
    <div 
      ref="cover-card"
      class="absolute w-full h-full cursor-pointer border-[0.1px] border-[#c4b7a7] rounded-xl flex flex-col transition-all"
      :class="[props.openCarousel ? 'drop-shadow-[0_0_30px_#c4b7a7] pointer-events-auto' : 'pointer-events-none']"
      :style="{
        backgroundImage: 'linear-gradient(to top left, #eee7db, #c4b7a5, #eee7db, #eee7db, #eee7db)',
        backfaceVisibility: 'hidden',
      }"
      @click="() => openCard = true"
    >
      <h2 
        class="text-2xl text-center text-[#5f5145] p-4 w-full h-28"
        style="font-family: Pirata One;"
      >
        {{ props.title }}
      </h2>
      <img 
        :src="props.image"
        class="flex-shrink-0 w-full p-3 h-28 object-contain"
      >
      <div class="w-full h-20 flex justify-center items-end">
        <a 
          :href="props.github" 
          class="w-10 h-10 mx-10 flex"
        >
          <svg viewBox="0 0 128 128" class="size-7 m-auto">
            <g fill="#5f5145"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
          </svg>
        </a>
        <a 
          :href="props.link || '#'" 
          class="w-10 h-10 mx-10 flex"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-[#5f5145] m-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
          </svg>
        </a>
      </div>
    </div>

    <div 
        ref="content-card"
        class="absolute text-[#5f5145] w-full h-full cursor-pointer border-[0.1px] border-[#c4b7a7] rounded-xl flex flex-col gap-2 transition-all px-5 py-3"
        :class="[props.openCarousel ? 'drop-shadow-[0_0_30px_#c4b7a7] pointer-events-auto' : 'pointer-events-none']"
        :style="{
          backgroundImage: 'linear-gradient(to top left, #eee7db, #c4b7a5, #eee7db, #eee7db, #eee7db)',
          transform: 'rotateY(180deg)',
          backfaceVisibility: 'hidden',
          fontFamily: 'Tangerine',
        }"
        @click="() => openCard = false"
    >
        <h2 class=" text-3xl font-extralight">Dear Developer,</h2>
        <p class=" text-3xl font-extralight">{{ props.description }}</p>
    </div>
  </div>
</template>