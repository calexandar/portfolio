<template>
    <div class="flex flex-col gap-8 lg:gap-16 mb-16">
        <TheHero/>
        <TheSocials/>
        <div class="h-[1px]  w-full bg-topbar lg:h-1"></div>
        <LatestProjects/>
    </div>
</template>

<script setup>
import TheHero from '~~/components/sections/TheHero.vue';
import TheSocials from '~~/components/sections/TheSocials.vue';
import LatestProjects from '~~/components/sections/LatestProjects.vue';

</script>

