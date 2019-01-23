<template>
    <div id="app">
        <img src="./components/images/banner_o1.png" alt="logo" />
        <span>{{msg}}</span>
        <p class="test">test text</p>
    </div>
</template>
<script>
import Vue from 'vue'
    export default {
        name:'app',
        data(){
            return {
                msg:"hello vue !!"
            }
        },
    }
</script>
