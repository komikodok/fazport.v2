<script setup lang="ts">

const isHomeScreen = ref<boolean>(true)
const isAssistantScreen = ref<boolean>(false)
const isMessageScreen = ref<boolean>(false)

const { isSleepMode } = defineProps<{
    isSleepMode: boolean
}>()

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
            v-if="isHomeScreen" 
            @open-assistant="openAssistant"
            @open-message="openMessage"
        />

        <PhoneAssistantScreen 
            v-else-if="isAssistantScreen" 
            
        />

        <PhoneMessageScreen 
            v-else-if="isMessageScreen" 
            @close-message="openHome"
        />
    </div>
</template>