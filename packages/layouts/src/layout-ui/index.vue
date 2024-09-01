<script setup lang="ts">
</script>

<template>
    <!--布局风格-->
    <div class="relative flex min-h-full w-full">
        <!--
            两种风格
            先配置aside
            或者不配做
        -->
        <div class="h-full flex flex-col">
            <template v-if="showHeader">
                <header  class="flex-shrink-0">
                    <slot name="header"></slot>
                </header>
            </template>
            <template v-if="showTab">
                <div class="flex-shrink-0">
                    <slot name="tab"></slot>
                </div>
            </template>
            <template v-if="showSider">
                <aside  class="absolute left-0 top-0 h-full">
                    <slot name="sider"></slot>
                </aside>
            </template>
            <div class="content">
                 <main  class="flex flex-col flex-grow">
                    <slot></slot>
                 </main>
            </div>

            <template v-if="showFooter">
                    <footer  class="flex-shrink-0">
                        <slot name="footer"></slot>
                    </footer>
            </template>
        </div>
    </div>
</template>


<style scoped></style>