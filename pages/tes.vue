<script setup lang="ts">

</script>

<template>
  <div class="w-screen h-screen bg-slate-200 flex justify-center items-center">
    <div class="project-card w-82 h-96 shadow-[0_0_40px_#c4b7a7] border border-[#c4b7a7] rounded-xl relative flex flex-col overflow-hidden">
        <h2 class="title font-bold text-xl text-center text-[#5f5145] p-4 w-full h-32">Machine Learning</h2>
        <img 
          src="/integrate-firestore-fastapi.png"
          class="flex-shrink-0 w-full h-32 object-contain"
        >
    </div>
  </div>
</template>

<style>
.title {
  font-family: 'Pirata One';
}

.project-card {
  background-image: linear-gradient(to top left, #eee7db, #c4b7a5, #eee7db, #eee7db, #eee7db);
}
</style>