<script setup lang="ts">
import gsap from 'gsap'
import ProjectCard from './ProjectCard.vue'

const { data, error } = await useFetch('/api/projects')

const angle = ref<number>(0)

const isOpen = ref<boolean>(true)

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
        
        tl.to('.project-card', {
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
    } else {
        tl = gsap.timeline()

        tl.to('.project-card', {
            top: 20,
            right: 80,
            scale: 0.1,
            opacity: 1,
            stagger: 0.1,
            transformOrigin: 'top center',
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
    <div id="project-carousel" class="w-screen h-screen flex justify-center items-center absolute inset-0">
        <div class="slider w-full h-full absolute inset-0">
            <div 
                v-for="(d, index) in data" 
                :key="index"
                class="project-card absolute bottom-0 right-1/2 translate-x-1/2 opacity- scale0"
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
    perspective: 3500px;
}
.slider {
    transform-style: preserve-3d;
}

</style>