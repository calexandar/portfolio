<template>
    <div class="flex justify-between items-center">
        <div class="flex gap-1">
            <SocialIcon
            title="Github"
            link="https://github.com/calexandar"
            icon="ant-design:github-outlined"
            />
            <SocialIcon
            title="Twitter"
            link="https://twitter.com/alex_web_mk"
            icon="ant-design:twitter-outlined"
            />
        </div>
        <ActionButton link="mailto:alexandercvet243@gmail.com">Email me</ActionButton>
    </div>
</template>

<script setup>
import SocialIcon from '../ui/SocialIcon';
import ActionButton from '../ui/ActionButton';
</script>

<style  scoped>

</style>