<script setup lang="ts">
import { computed } from 'vue';
import { AdminLayout } from '@zfxm/layouts';


defineOptions({
    name: 'BaseLayout'
});

</script>


<template>
    <AdminLayout :show-header="true" :show-tab="true" :show-sider="true" :show-footer="true">
        <template #header>
            <span style="background-color: red;">header</span>
        </template>
        <template #tab>
            <span style="background-color: beige;">tab</span>
        </template>
        <template #sider>
            <span style="background-color: blue;">sider</span>
        </template>
        <template #footer>
            <span style="background-color: hotpink;">footer</span>
        </template>
    </AdminLayout>
</template>

<style scoped></style>