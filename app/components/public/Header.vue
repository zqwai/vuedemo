<template>
    <ul class="header">
        <li>
            <router-link :to="{name: 'homeLink'}">首页</router-link>
        </li>
        <li>
            <router-link :to="{name: 'aboutLink'}">关于我们</router-link>
        </li>
        <li>
            <router-link :to="{name: 'productLink'}">产品中心</router-link>
        </li>
        <li>
            <router-link :to="{name: 'workLink'}">案例展示</router-link>
        </li>
        <li>
            <router-link :to="{name: 'contactLink'}">客服中心</router-link>
        </li>
    </ul>
</template>

<style scoped>
</style>
