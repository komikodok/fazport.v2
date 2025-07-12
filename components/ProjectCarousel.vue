<script setup lang="ts">
import gsap from 'gsap'
import ProjectCard from './ProjectCard.vue'

const { data, error } = await useFetch('/api/projects')
onMounted(async () => {
    console.log(data.value)

    await nextTick()

    gsap.to('.project-card', {
        x: 100,
        y: 100,
        ease: 'linear',
        stagger: 0.3
    })
})
</script>

<template>
    <div class="max-w-xl w-full h-96 border mx-auto relative">
        <div 
            v-for="(d, index) in data" 
            :key="index"
            class="project-card absolute top-0 left-0"
        >
            <ProjectCard 
                :id="d.id"
                :title="d.title"
                :description="d.description"
                :github="d.github"
                :image="d.image"
            />
        </div>
    </div>
</template>