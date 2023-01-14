<template>
    <nav
      class="bottom-0 px-3 py-3 flex justify-between items-center
      border-b-[1px] border-border_sm fixed w-full bg-navbar_back backdrop-blur-sm sm:top-0
      sm:bottom-auto sm:px-6 lg:py-4"
    >
    <div class="h-[1px] top-0 absolute left-0 w-full bg-topbar lg:h-1"></div>
    <NuxtLink
        class="flex items-start"
        to="/"
    >
    <img :src="Logo" class="object-scale-down h-8 w-96  "/>
    </NuxtLink>
    <div class="flex text-sm items-center gap-1 sm:gap-2">
      <NavbarItem to="/">
        Home
      </NavbarItem>
      <NavbarItem to="/about">
        About
      </NavbarItem>
      <NavbarItem to="/projects">
        Projects
      </NavbarItem>
    </div>
  </nav>
</template>

<script setup>
import NavbarItem from '../ui/NavbarItem.vue';
import Logo from '~/assets/img/first_logo.png';
</script>

<style  scoped>

</style>