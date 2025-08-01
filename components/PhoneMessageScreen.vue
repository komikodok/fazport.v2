<script setup lang="ts">
import gsap from 'gsap';
import type IMessage from '~/types/message.type';

const { isMessageScreen } = defineProps<{
  isMessageScreen: boolean
}>()

const name = useTemplateRef<HTMLInputElement>('name')
const messageScreen = useTemplateRef<HTMLInputElement>('message-screen')

const data = reactive<IMessage>({
  id: 0,
  name: '',
  email: '',
  subject: '',
  message: ''
})

const emit = defineEmits<{
  (e: 'close-message'): void
}>()

defineExpose({
  messageScreen
})

onMounted(() => {
  name.value?.focus()

  gsap.fromTo(messageScreen.value, { opacity: 0.5, scale: 0.3 },
  {
    opacity: 1,
    scale: 1,
    ease: 'power1'
  })
})

const isValid = computed(() =>   
    data.name.trim() !== '' &&
    data.email.trim() !== '' &&
    data.message.trim() !== '' 
)
</script>

<template>
  <div ref="message-screen" class="absolute inset-0 font-[Poppins]">
    <div class="w-full h-full rounded-2xl overflow-hidden flex flex-col bg-base-100 shadow-md">

      <!-- Header -->
      <div class="h-14 flex justify-between items-center px-2 border-b border-base-200">
        <button 
          class="btn btn-ghost btn-sm"
          @click="emit('close-message')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>

        <div class="dropdown dropdown-end">
          <button tabindex="0" class="btn btn-ghost btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
          </button>
          <ul tabindex="0" class="dropdown-content z-10 menu bg-base-100 rounded-box w-40 p-2 shadow">
            <li><a>Archive</a></li>
            <li><a class="text-red-500">Delete</a></li>
          </ul>
        </div>
      </div>

      <!-- Message Form -->
      <form 
        class="w-full h-full flex flex-col gap-4 p-4 overflow-y-auto"
        @submit.prevent=""
      >
        <div class="flex items-center gap-2">
          <label for="name" class="w-22 text-xs text-zinc-800">Name</label>
          <input 
            id="name"
            ref="name"
            name="name"
            type="text" 
            placeholder="John Doe"
            v-model="data.name"
            class="text-xs p-1 w-full outline-none"
          />
        </div>

        <div class="flex items-center gap-2">
          <label for="email" class="w-22 text-xs text-zinc-800">Email</label>
          <input 
            id="email"
            name="email"
            type="email" 
            placeholder="john@example.com"
            v-model="data.email"
            class="text-xs p-1 w-full outline-none"
          />
        </div>

        <div class="flex items-center gap-2">
          <label for="subject" class="w-22 text-xs text-zinc-800">Subject</label>
          <input 
            id="subject"
            name="subject"
            type="text" 
            placeholder="Your Subject"
            v-model="data.subject"
            class="text-xs p-1 w-full outline-none"
          />
        </div>

        <div class="flex flex-col w-full h-full gap-3">
          <label for="message" class="w-22 pt-1 text-xs text-zinc-800">Message</label>
          <textarea 
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            v-model="data.message"
            class=" text-xs p-1 w-full h-full resize-none outline-none"
          ></textarea>
        </div>

        <!-- Submit -->
        <div class="flex justify-end mt-auto">
          <button 
            type="submit" 
            class="p-2 w-10 h-10 rounded-full flex justify-center items-center bg-green-700 transition-all duration-600"
            :class="isValid ? 'opacity-100 cursor-pointer' : 'opacity-70 cursor-not-allowed pointer-events-none'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-white">
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
</style>
