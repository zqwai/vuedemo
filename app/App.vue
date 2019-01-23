
<template>
    <div class="wrap">
        <div class="banner">
            <img v-bind:src="img" width="100%">
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            img: './components/images/banner_01.jpg',
        }
    }
}
</script>