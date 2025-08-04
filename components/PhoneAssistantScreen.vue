<script setup lang="ts">
import gsap from 'gsap';


const assistantScreen = useTemplateRef<(HTMLDivElement)>('assistant-screen')

const props = defineProps<{
  xOrigin: number
  yOrigin: number,
}>()

const emit = defineEmits<{
    (e: 'back-home'): void
}>()

onMounted(() => {
  const origin = `${props.xOrigin}px ${props.yOrigin}px`

  console.log(origin)

  gsap.fromTo(assistantScreen.value, { opacity: 0.5, scale: 0.3 },
  {
    opacity: 1,
    scale: 1,
    transformOrigin: origin,
    ease: 'power4'
  })
})

</script>

<template>
    <div ref="assistant-screen" class="absolute inset-0">
        <div class="w-full h-full rounded-2xl flex flex-col">
            <div class="h-14 flex justify-between items-center px-2 border-b border-base-200">
                <button 
                    class="btn btn-ghost bg-transparent border-transparent btn-sm"
                    @click="emit('back-home')"
                >
                <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                </button>
            </div>
        </div>
    </div>
</template>