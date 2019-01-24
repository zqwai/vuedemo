
<template>
    <section class="wrap">
        <nav class="nav">

        </nav>
        <section class="banner">
            <img v-bind:src="img" width="100%">
        </section>
        <section class="cont">
            <p>{{ foo }} <span v-html="rawHtml"></span></p>
            <button v-on:click="foo = 'baz'">Change it</button>
            <div class="text">{{ text }}</div>
        </section>
        <footer class="footer">
            <p>{{copyright}}</p>
        </footer>
    </section>
</template>
<script>
export default{
    data(){
        return{
            copyright:'版权所有',
            img: 'static/images/banner_01.jpg',
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