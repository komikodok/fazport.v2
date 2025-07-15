<script setup lang="ts">
import gsap from 'gsap'
import ProjectCard from './ProjectCard.vue'

const { data, error } = await useFetch('/api/projects')

const angle = ref<number>(0)

const isOpen = ref<boolean>(false)

let tl: gsap.core.Timeline

onMounted(async () => {
    await nextTick()

    if (data.value && !error.value) {
        angle.value = 360 / data.value.length
        animate()
    }
})

watch(() => isOpen.value, () => animate())

function animate() {
    if (isOpen.value) {
        tl = gsap.timeline()
        
        tl.to('#project-carousel', { opacity: 1 })
        .to('.project-card', {
            top: '30%',
            yPercent: -50,
            scale: 1,
            opacity: 1,
            stagger: 0.1,
            ease: 'power4'
        })
        .to('.project-card', {
            stagger: 0.2,
            transform: (i) => {
                const rotateY = `rotateY(${i * angle.value}deg)`
                const translateZ = `translateZ(400px)`
                return `${rotateY} ${translateZ}`
            },
            ease: 'power2'
        })
        .to('.slider', {
            rotateY: 360,
            repeat: -1,
            duration: 15,
            ease: 'linear'
        })
    } else {
        tl = gsap.timeline()

        tl.to('#project-carousel', { opacity: 1 })
        .to('.project-card', {
            top: 20,
            right: 40,
            scale: 0.1,
            opacity: 1,
            stagger: 0.1,
            transformOrigin: 'top right',
            ease: 'power4'
        })
        .to('.project-card', {
            rotate: (i) => i * (angle.value / 20),
            stagger: 0.2,
            ease: 'power2'
        })
    }
}
</script>

<template>
    <div id="project-carousel" class="w-screen h-screen bg-black/80 opacity-0 flex justify-center items-center absolute inset-0">
        <div class="slider transform-3d w-full h-full absolute inset-0 flex justify-center items-center">
            <div 
                v-for="(d, index) in data" 
                :key="index"
                class="project-card h-80 cursor-pointer absolute bottom-0 right-[43%] opacity-10 scale-10"              
            >
                <ProjectCard 
                    :id="d.id"
                    :title="d.title"
                    :description="d.description"
                    :github="d.github"
                    :image="d.image"
                    :open="isOpen"
                />
            </div>
        </div>
    </div>
</template>

<style>
#project-carousel {
    perspective: 5000px;
}

/* .slider {
    transform-style: preserve-3d;
} */

.project-card {
  transform: rotateY(0deg) translateZ(0px);
  transform-origin: center center;
}

</style>