
<template>
    <div class="wrap">
        <div class="banner">
            <!-- <img v-bind:src="img" width="100%"> -->
            <p>{{ foo }} <span v-html="rawHtml"></span></p>
            <button v-on:click="foo = 'baz'">Change it</button>
        </div>
        <div class="text">{{ text }}</div>
        
    </div>
</template>
<script>
export default{
    data(){
        return{
            // img: 'static/images/banner_01.jpg',
            text: '页面加载于 ' + new Date().toLocaleString(),
            foo: 'ss',
            a: 1,
            rawHtml: '<span style="color: red">This should be red.</span>'
        }
    },
    created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
}
</script>