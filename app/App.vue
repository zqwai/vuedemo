<template>
    <section class="wrap clearfix">
        <Header></Header>
        
        <div class="contant">
            <router-view></router-view>
            <div class="cc"></div>
        </div>

    </section>
</template>
<script>
import Header from './components/public/Header.vue';
export default {
    components:{
        Header
    },
    data() {
        return{
            
        }  
    },
    
    
}
</script>
 