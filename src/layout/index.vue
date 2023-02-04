<template>
    <div>
        <RouterView></RouterView>
        <footer>
            <van-tabbar v-model="active">
                <van-tabbar-item icon="home-o">标签</van-tabbar-item>
                <van-tabbar-item icon="search">标签</van-tabbar-item>
                <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
                <van-tabbar-item icon="https://unpkg.com/@vant/assets/icon-demo.png" @click="user">用户</van-tabbar-item>
            </van-tabbar>
        </footer>
    </div>
</template>

<script>
import { ref,reactive} from 'vue'
import {router} from '../router/index'
export default {
    name: 'layout',
    setup(){
        const active = ref(0)
        const user = function(){
            router.push({path:'/user'})
        }
        return {
            active,
            user
        }
    }
    
}
</script>

<style lang="less">

footer{
    position: fixed;
    bottom: 0;
    z-index: 999;
}
</style>