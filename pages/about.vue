<template>
    <div>
        <NuxtLayout name="page">
      <img :src="TopImage" class=" h-52 rounded-xl object-scale-down"/>
      <div class="flex flex-col gap-6 lg:gap-9 mx-auto w-full md:w-10/12">
        <SectionParagraph>
            Hey! My name is Aleksandar.I am a web developer & web designer based in Skopje, Macedonia.
            I have been working as a freelance developer and web designer since 2021. I’ve always been someone who 
            has both a creative and a logical side. When I discovered web design, I realized it would 
            be the perfect fit. I could use my creative side to design and my logical side to code. 
            As a bonus, being both designer and developer allows me to make sure no detail is lost in translation.
        </SectionParagraph>
        <SectionParagraph>
          I'm currently working freelance for clients and frends.        
          I am also learning 
          <LinkBtn link="https://vuejs.org/" text="VueJS"/>
            and 
          <LinkBtn link="https://nuxt.com/" text="NuxtJs."/>
          Before this, I just
          used to create various 
          <LinkBtn link="https://laravel.com" text="Laravel"/>
          Blade web-apps to fulfill my needs. It has helped me
          polish my web-development skills.
        </SectionParagraph>
        <SectionParagraph>
          I started learning  web-development at 
          <LinkBtn link="https://brainster.co" text="Brainster Academy"/>, 
          where I was introduced to various web tehnologies like HTML, CSS, 
          Bootstrap, jQuery, MySQL and Laravel. 
          I quickly started writing  webpages for my friends
          and clients. After then I explore the web development world more and found many
          frameworks. Out of all, I found my love for NuxtJs. Since then, I've been
          mastering it, and with every new project I added a new tool, like
          <LinkBtn link="https://tailwindcss.com/" text="TailwindCSS"/>
           and more.
        </SectionParagraph>
        <SectionParagraph>
          You can find my projects on my
          <LinkBtn link="https://github.com/calexandar" text="Github"/>
          or on my
          <LinkBtn link="/projects" text="Projects"/>
          page.
        </SectionParagraph>
        <SectionParagraph>
          Outside of my work-life, I love landscape photoraphy, flyfishing,  
          practice martial arts especially Wing Chun,
          or just hanging with my friends. You can
          follow along about my life on my
          <LinkBtn link="https://www.instagram.com/alex_web_mk/" text="Instagram"/>
          or
          <LinkBtn link="https://twitter.com/alex_web_mk" text="Twitter"/>.
        </SectionParagraph>
        <SectionParagraph>
          You can check my latest photoraphy on 
          <LinkBtn link="https://500px.com/p/calexandar?view=photos" text="500px"/>!
        </SectionParagraph>
      </div>
      <hr class="h-[1px] w-full bg-topbar lg:h-1"/>

    </NuxtLayout>
    </div>
</template>

<script setup>
import TopImage from '~~/assets/img/removed_bg.png';
import SectionParagraph from '~~/components/ui/SectionParagraph';
import LinkBtn from '~~/components/ui/LinkBtn';
import SectionTitle from '~~/components/ui/SectionTitle';
</script>

<style  scoped>

</style>