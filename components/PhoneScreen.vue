<script setup lang="ts">
import PhoneHomeScreen from './PhoneHomeScreen.vue';


const homeScreen = useTemplateRef<InstanceType<(typeof PhoneHomeScreen)>>('home-screen')
const assistantApps = homeScreen.value?.assistantApps
const messageApps = homeScreen.value?.messageApps

const { isSleepMode } = defineProps<{
    isSleepMode: boolean
}>()

const isHomeScreen = ref<boolean>(true)
const isAssistantScreen = ref<boolean>(false)
const isMessageScreen = ref<boolean>(false)

function openHome() {
    isHomeScreen.value = true
    isAssistantScreen.value = false
    isMessageScreen.value = false
}

function openAssistant() {
    isHomeScreen.value = false
    isAssistantScreen.value = true
    isMessageScreen.value = false
}

function openMessage() {
    isHomeScreen.value = false
    isAssistantScreen.value = false
    isMessageScreen.value = true
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
            
        />

        <PhoneMessageScreen 
            v-else-if="isMessageScreen" 
            :is-message-screen="isMessageScreen"
            @close-message="openHome"
        />
    </div>
</template>