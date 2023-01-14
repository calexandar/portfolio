<template>
    <div class="flex flex-col items-center gap-8">
        <img :src="image" :alt="name" class="rounded-lg w-full">
        <div class="flex flex-col md:w-5/6 items-left gap-6">
            <span class="font-bold text-2xl text-head_text">{{ name }}</span>
            <p class="text-sm lg:text-lg">{{ description }}</p>
            <h2 class="font-bold text-head_text">Web technologies:</h2>
            <div class="flex gap-2">
                <p v-for="t in tech" class="text-xs md:text-sm">{{ t }}</p>
            </div>
            <ActionButton :link="link" class="w-fit">
                {{ returnDomain(link) }}
                <Icon class="inline text-xl" color="#eaeaea" icon="material-symbols:arrow-forward"/>
            </ActionButton>
        </div>
    </div>
</template>

<script setup>
import {Icon} from "@iconify/vue";
import ActionButton from '~/components/ui/ActionButton';
const returnDomain = (domain) => domain.match(
    /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/
).pop();

defineProps([
    "name",
    "image",
    "description",
    "tech",
    "link",
])

</script>

