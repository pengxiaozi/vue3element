<template>
    <component :is="activeMenu" :key="reRenderVertical" />
</template>

<script setup>
import { computed } from 'vue';
import VerticalMenu from './module/vertical-menu.vue';


const menu_type='veritcal';

const activeMenu = computed(() => {
    const menuList={
        'veritcal':VerticalMenu,
        'veritcal-mix':VerticalMenu,
        'horizontal':VerticalMenu,
        'horizontal-mix':VerticalMenu,
    }

    return menuList[menu_type];
});

const reRenderVertical = computed(() => menu_type === 'vertical' && appStore.isMobile);


</script>

<style lang="scss" scoped>

</style>