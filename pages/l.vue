<script setup lang="ts">
import Profile from '~/components/Profile.vue';
</script>

<template>
  <Profile >
    <div id="profile-content" class="border w-[85%] h-[70%] translate-y-2 flex gap-2 items-center justify-between">
      <div style="background-image: url('/photo-profile.jpeg');" class="border flex-shrink-0 bg-cover w-36 h-36"/>
      <p class="text-center text-[#7a7067] font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam corrupti facere provident? Amet perspiciatis ratione aut rem eveniet? Dolorum maiores veritatis doloribus aliquid quibusdam repellat nam nemo odio nobis libero.</p>
    </div>
  </Profile>
</template>

<style>
#profile-content {
  font-family: Poppins;
}
</style>