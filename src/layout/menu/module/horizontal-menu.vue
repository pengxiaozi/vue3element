<template>
    <el-menu mode="horizontal">
        <MenuItem v-for="item in routeStore.menus" :key="item.key" :item="item" :index="item.key" />
    </el-menu>
</template>

<script setup>
import { ref } from 'vue';
import MenuItem from '../components/menu-item.vue';


const routeStore = ref({
    "menus": [
        {
            "id": 1,
            "name": "首页",
            "url": "/home",
            "children": []
        },
        {
            "id": 2,
            "name": "用户管理",
            "url": "/user",
            "children": [
                {
                    "id": 21,
                    "name": "用户列表",
                    "url": "/user/list",
                    "children": []
                },
                {
                    "id": 22,
                    "name": "角色管理",
                    "url": "/user/roles",
                    "children": [
                        {
                            "id": 221,
                            "name": "角色列表",
                            "url": "/user/roles/list",
                            "children": []
                        },
                        {
                            "id": 222,
                            "name": "角色权限",
                            "url": "/user/roles/permissions",
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "id": 3,
            "name": "系统设置",
            "url": "/settings",
            "children": [
                {
                    "id": 31,
                    "name": "基础设置",
                    "url": "/settings/base",
                    "children": []
                },
                {
                    "id": 32,
                    "name": "通知设置",
                    "url": "/settings/notification",
                    "children": []
                }
            ]
        }
    ]
}
)

</script>

<style lang="scss" scoped></style>