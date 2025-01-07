<script setup>
const props = defineProps({
    item: Object,
});

const hasChildren = props.item.children && props.item.children.length > 0;
</script>

<template>
    <el-sub-menu v-if="hasChildren" :index="item.key">
        <template #title>
            <el-icon>
                <component :is="item.icon" />
            </el-icon>
            <span class="ib-ellipsis">{{ item.label }}</span>
        </template>
        <menu-item v-for="child in item.children" :key="child.key" :item="child" :index="child.key"></menu-item>
    </el-sub-menu>
    <el-menu-item v-else>
        <el-icon>
            <component :is="item.icon" />
        </el-icon>
        <span class="ib-ellipsis">{{ item.label }}</span>
    </el-menu-item>
</template>

<style scoped>
.ib-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
}
</style>
