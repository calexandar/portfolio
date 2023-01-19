<template>
    <NuxtLayout name="default">
  <NuxtPage v-slot="{ Component }">
    <component :is="Component"/>
  </NuxtPage>
</NuxtLayout>
<Teleport to="body">
  <TheNavbar/>
  <Cookie/>
</Teleport>
</template>

<script setup>
import TheNavbar from './components/sections/TheNavbar.vue';
import Cookie from './components/sections/Cookie.vue';

const images = import.meta.glob("./assets/img/*.{jpg,png,svg,ico}", {as: 'url', eager: true});

useHead({
  title:'Aleksandar Cvetanovski:Developer, Web Designer, Learner',

  meta: [
    {
      name:'description',
      content:'I specialize in creating sites for individuals and small businesses.'
    },
    {
      name:"twitter:card",
      content:"summary"
    },
    {
      name:"twitter:site",
      content:"@alex_web_mk"
    },
    {
      name:"twitter:title",
      content:"Alexandar Cvetanovski: Developer, Web Designer, Learner"
    },
    {
      name:"twitter:description",
      content:"Web Developer designing beautiful, affordable web apps"
    },
    {
      name:"twitter:image",
      content:images['./assets/img/twiter_image.jpg']
    },
    {
      property:"og:url",
      content:"http://alex-web.mk"
    },
    {
      property:"og:title",
      content:"Alexandar Cvetanovski: Developer, Web Designer, Learner"
    },
    {
      property:"og:description",
      content:"Web Developer designing beautiful, affordable web apps"
    },
    {
      property:"og:image",
      content:images['./assets/img/twiter_image.jpg']
    }
  ],
  link: [
    {
      rel:'shortcut icon',
      href:images['./assets/img/favicon.ico'],
      type:'image/x-icon',
    }
  ]
})
</script>
