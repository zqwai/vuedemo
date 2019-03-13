// import _ from 'lodash'
import './../static/stylus/public.styl'

import App from './App.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './router'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    // base: __dirname,
    routes: Routes,
});


new Vue({
    el: "#app",
    router,
    render:h=>h(App)
})
