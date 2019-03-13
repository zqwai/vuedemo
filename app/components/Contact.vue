<template>
    <div>
        <div class="side">
            <ul>
                <li>
                    <router-link :to = '{name: "contact_usLink"}'>联系我们</router-link>
                </li>
                <li>
                    <router-link :to = '{name: "messageLink"}'>在线留言</router-link>
                </li>
                <li>
                    <router-link :to = '{name: "mapLink"}'>地图路线</router-link>
                </li>
            </ul>
        </div>
        <div class="cont">
            <router-view></router-view>
        </div>
    </div>
</template>
