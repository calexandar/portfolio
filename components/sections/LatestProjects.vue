<template>
    <div>
        <NuxtLayout name="section">
            <SectionTitle>Latest Projects</SectionTitle>
            <p>Bellow are my latest projects that I've been working on.</p>
            <div class="grid grid-cols-1 slg:grid-cols-2 gap-7 sm:gap-6 pt-8 mx-auto sm:w-5/6 slg:w-full">
                <ProjectItem
                    v-for="project in projects"
                    :key="project.id"
                    :description="project.description"
                    :image="project.image"
                    :link="project.link"
                    :name="project.name"
                    :tech="project.tech"
                />
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup>
import SectionTitle from '../ui/SectionTitle';
import ProjectItem from '../ui/ProjectItem.vue';
import {useProjectStore} from "~/store/projectStore";
const {getLatestProjects} = useProjectStore();
const projects = getLatestProjects;
</script>
