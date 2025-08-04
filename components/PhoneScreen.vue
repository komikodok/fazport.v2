<script setup lang="ts">
import PhoneHomeScreen from './PhoneHomeScreen.vue';

const { isSleepMode } = defineProps<{
    isSleepMode: boolean
}>()

const homeScreen = useTemplateRef<InstanceType<(typeof PhoneHomeScreen)>>('home-screen')

const appPosition = reactive<{x: number, y: number}>({
    x: 0,
    y: 0
})

const isHomeScreen = ref<boolean>(false)
const isAssistantScreen = ref<boolean>(false)
const isMessageScreen = ref<boolean>(false)

onMounted(() => isHomeScreen.value = true)

function resetScreen() {
    isHomeScreen.value = false
    isAssistantScreen.value = false
    isMessageScreen.value = false
}

function openHome() {
    resetScreen()
    
    isHomeScreen.value = true
}

function openAssistant() {
    const assistantApps = homeScreen.value?.assistantApps

    if (!assistantApps) return
    
    resetScreen()
    isAssistantScreen.value = true

    appPosition.x = assistantApps.offsetLeft
    appPosition.y = assistantApps.offsetTop
}

function openMessage() {
    const messageApps = homeScreen.value?.messageApps

    if (!messageApps) return
    
    resetScreen()
    isMessageScreen.value = true

    appPosition.x = messageApps.offsetLeft
    appPosition.y = messageApps.offsetTop
}
</script>

<template>
    <div v-if="!isSleepMode">
        <PhoneHomeScreen 
            ref="home-screen"
            v-if="isHomeScreen" 
            @open-assistant="openAssistant"
            @open-message="openMessage"
        />

        <PhoneAssistantScreen 
            v-else-if="isAssistantScreen" 
            :x-origin="appPosition.x"
            :y-origin="appPosition.y"
            @back-home="openHome"
        />

        <PhoneMessageScreen 
            v-else-if="isMessageScreen" 
            :x-origin="appPosition.x"
            :y-origin="appPosition.y"
            @back-home="openHome"
        />
    </div>
</template>