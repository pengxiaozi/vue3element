<script setup>

import { defineProps, computed } from 'vue';

import style from './index.module.css';


const props = defineProps({
  showHeader: { type: Boolean, default: true }, // 是否显示头部
  showTab: { type: Boolean, default: true },   // 是否显示标签页
  showSider: { type: Boolean, default: true }, // 是否显示侧边栏
  showFooter: { type: Boolean, default: true }, // 是否显示底部
  mode: { type: String, default: 'vertical' },  // 布局模式（vertical/horizontal）
  scrollMode: { type: String, default: 'content' }, // 滚动模式（content/native）
  commonClass: { type: String, default: 'transition-all-300' }, // 公共样式类名
  fixedTop: { type: Boolean, default: true },  // 头部是否固定在顶部
  tabHeight: { type: Number, default: 48 },   // 标签页高度
  siderCollapse: { type: Boolean, default: false }, // 侧边栏是否折叠
  siderWidth: { type: Number, default: 220 }, // 侧边栏宽度
  siderCollapsedWidth: { type: Number, default: 64 }, // 折叠后的侧边栏宽度
  footerHeight: { type: Number, default: 48 }, // 底部高度
  rightFooter: { type: Boolean, default: false }, // 是否在右侧显示底部
  headerHeight: { type: Number, default: 64 }, // 头部高度
  isMobile: { type: Boolean, default: false }, // 是否是移动端
  maxZIndex: { type: Number, default: 100 },  // 最大层级
  fullContent: { type: Boolean, default: false } // 是否全屏显示
});


const showHeader = computed(() => props.showHeader);
const showTab = computed(() => props.showTab);
const showSider = computed(() => props.showSider);
const showFooter = computed(() => props.showFooter);


//style风格 变量替换
const cssVars = computed(() => {

    const {
        mode,
        isMobile,
        maxZIndex = 100,
        headerHeight,
        tabHeight,
        siderWidth,
        siderCollapsedWidth,
        footerHeight
    } = props;

    const headerZIndex = maxZIndex - 3;
    const tabZIndex = maxZIndex - 5;
    const siderZIndex = mode === 'vertical' || isMobile ? maxZIndex - 1 : maxZIndex - 4;
    const mobileSiderZIndex = isMobile ? maxZIndex - 2 : 0;
    const footerZIndex = maxZIndex - 5;

    return {
        '--layout-header-height': `${headerHeight}px`,
        '--layout-header-z-index': headerZIndex,
        '--layout-tab-height': `${tabHeight}px`,
        '--layout-tab-z-index': tabZIndex,
        '--layout-sider-width': `${siderWidth}px`,
        '--layout-sider-collapsed-width': `${siderCollapsedWidth}px`,
        '--layout-sider-z-index': siderZIndex,
        '--layout-mobile-sider-z-index': mobileSiderZIndex,
        '--layout-footer-height': `${footerHeight}px`,
        '--layout-footer-z-index': footerZIndex
    };
});

//布局切换
const isVertical = computed(() => props.mode === 'vertical'); // 是否垂直   
const isHorizontal = computed(() => props.mode === 'horizontal');// 是否水平 
const isWrapperScroll = computed(() => props.scrollMode === 'wrapper'); // 是否全局
const isContentScroll = computed(() => props.scrollMode === 'content');// 是否内容滚动
const fixedHeaderAndTab = computed(() => props.fixedTop || (isHorizontal.value && isWrapperScroll.value));// 是否固定头部和标签页
const leftGapClass = computed(() => {
    if (!props.fullContent && showSider.value) {
        return props.siderCollapse ? style['left-gap_collapsed'] : style['left-gap'];
    }

    return '';
}); // 左侧边距

const headerLeftGapClass = computed(() => (isVertical.value ? leftGapClass.value : ''));// 头部左侧边距

const siderPaddingClass = computed(() => {
    let cls = '';

    if (showHeader.value && !headerLeftGapClass.value) {
        cls += style['sider-padding-top'];
    }
    //   if (showFooter.value && !footerLeftGapClass.value) {
    //     cls += ` ${style['sider-padding-bottom']}`;
    //   }

    return cls;
}); // 侧边栏内边距



</script>

<template>
    <!--布局风格-->
    <div class="relative h-full" :class="[commonClass]" :style="cssVars">
        <!--
            两种风格
            先配置aside
            或者不配做
        -->
        <div class="h-full flex flex-col">
            <template v-if="showHeader">
                <header class="flex-shrink-0" :class="[
                    style['layout-header'],
                    commonClass,
                    headerLeftGapClass,
                    { 'absolute top-0 left-0 w-full': fixedHeaderAndTab }
                ]">
                    <slot name="header"></slot>
                </header>
                <div v-show="!fullContent && fixedHeaderAndTab" class="flex-shrink-0 overflow-hidden"
                    :class="[style['layout-header-placement']]"></div>
            </template>
            <template v-if="showTab">
                <div class="flex-shrink-0" :class="[
                    style['layout-tab'],
                    commonClass,
                    { 'top-0!': fullContent || !showHeader },
                    leftGapClass,
                    { 'absolute left-0 w-full': fixedHeaderAndTab }
                ]">
                    <slot name="tab"></slot>
                </div>
                <div v-show="fullContent || fixedHeaderAndTab" class="flex-shrink-0 overflow-hidden"
                    :class="[style['layout-tab-placement']]"></div>
            </template>
            <template v-if="showSider">
                <aside class="absolute left-0 top-0 h-full" :class="[
                    commonClass,
                    siderPaddingClass,
                    siderCollapse ? style['layout-sider_collapsed'] : style['layout-sider']
                ]">
                    <slot name="sider"></slot>
                </aside>
            </template>
            <div class="content">
                <main class="flex flex-col flex-grow"
                    :class="[commonClass, leftGapClass, { 'overflow-y-auto': isContentScroll }]">
                    <slot></slot>
                </main>
            </div>

            <template v-if="showFooter">
                <footer class="flex-shrink-0">
                    <slot name="footer"></slot>
                </footer>
            </template>
        </div>
    </div>
</template>


<style scoped></style>