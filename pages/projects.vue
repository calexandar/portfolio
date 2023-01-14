<template>
    <NuxtLayout name="page">
        <MainTitle>Projects</MainTitle>
        <MainParagraph class="mt-2">
            Here are the projects I've been working in the past year. I hope you'll find them interesting. 
        </MainParagraph>
        <div class="h-[1px]  w-full bg-topbar lg:h-1"></div>
        <div class="flex flex-col items-center justify-center gap-28">
            <MainProjectItem
                v-for="proj in projects"
                :key="proj.id"
                :description="proj.description"
                :image="proj.image"
                :link="proj.link"
                :name="proj.name"
                :tech="proj.tech"
            />
        </div>
    </NuxtLayout>
</template>

<script setup>
import MainTitle from '~~/components/ui/MainTitle';
import MainParagraph from '~~/components/ui/MainParagraph';
import MainProjectItem from '~~/components/ui/MainProjectItem.vue';
import {useProjectStore} from "~/store/projectStore";
const {getAllProjects} = useProjectStore();
const projects = getAllProjects;
</script>

