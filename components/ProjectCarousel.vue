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
        
        tl.to('.project-card', {
            top: '30%',
            right: '50%',
            xPercent: 50,
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
        gsap.killTweensOf('.slider')

        tl = gsap.timeline()

        tl.to('.slider', { rotateY: 0 })
        .to('.project-card', {
            top: 20,
            right: 40,
            scale: 0.1,
            opacity: 1,
            stagger: 0.1,
            transformOrigin: 'top right',
            transform: 'rotateY(0deg) translateZ(0px)',
            ease: 'power1'
        })
        .to('.project-card', {
            rotate: (i) => i * (angle.value / 20),
            stagger: 0.2,
            ease: 'power2'
        })
    }
}

function handlePrevClick() {
    gsap.killTweensOf('.slider')

    gsap.to('.slider', {
        rotateY: `-=${angle.value}`,
        ease: 'power4'
    })
}

function handleNextClick() {
    gsap.killTweensOf('.slider')

    gsap.to('.slider', {
        rotateY: `+=${angle.value}`,
        ease: 'power4'
    })
}
</script>

<template>
    <div id="project-carousel" class="w-screen h-screen flex justify-center items-center absolute inset-0">

        <div class="slider transform-3d w-full h-full -rotate-x-6 absolute inset-0 flex justify-center items-center">
            <div 
                v-for="(d, index) in data" 
                :key="index"
                class="project-card h-80 cursor-pointer absolute bottom-0 opacity-0 scale-10 z-20"              
                @click.prevent="() => isOpen = !isOpen"
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

        <div v-if="isOpen" class="flex justify-between absolute bottom-0 w-96 h-20">
            <div
                id="prev-button" 
                class="w-20 h-20 cursor-pointer"
                @click="handlePrevClick"
            >
                <img src="/prev-button.png" class="object-cover">
            </div>

            <div 
                id="next-button" 
                class="w-20 h-20 cursor-pointer"
                @click="handleNextClick"
            >
                <img src="/next-button.png" class="object-cover">
            </div>
        </div>
    </div>
</template>

<style>
#project-carousel {
    perspective: 5000px;
}

.project-card {
  transform: rotateY(0deg) translateZ(0px);
  transform-origin: center center;
}

</style>