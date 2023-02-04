<template>
    <van-nav-bar title="登录" left-text="返回" left-arrow @click-left="$router.back()"></van-nav-bar>
    <van-form>
        <van-cell-group>
            <van-field v-model="username" label="用户名" placeholder="请输入用户名" :rules="[{ required: true, message: '请输入手机号' }, {
                validator: mobilePattern, message: '手机号码格式错误'
            }]" />
            <van-field v-model="password" label="密码" placeholder="请输入密码" :rules="[{ required: true, message: '请输入密码' }, {
                validator: passwordPattern, message: '密码6-13位'
            }]" />

        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" @click="login">
                提交
            </van-button>
        </div>
        <div class="help">
            <div class="regist"><a href="javascript:;" @click="$router.push('/regist')">注册</a></div>
            <div class="findCount"><a href="javascript:;">找回账号</a></div>
        </div>
    </van-form>

</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { login } from '../../api/user'
import { useRouter } from 'vue-router'
export default {
    name: 'login',
    setup() {
        const username = ref('')
        const password = ref('')
        const store = useStore()
        const router = useRouter()
        // 手机号校验
        const mobilePattern = (val) => /^1[3,8,9,7]{1}\d{9}$/.test(val)
        // 密码校验
        const passwordPattern = (val) => /^[\s\S]{6,10}$/.test(val)
        return {
            username, password, mobilePattern, passwordPattern, store, router
        }
    },
    methods: {
        async login() {
            const userinfo = { username: this.username, password: this.password }
            const { data } = await login(userinfo)
            if (!data.status) {
                this.store.commit('setUser', data.data[0].username)
                this.router.push('/user')
                $Toast.loading({
                    message: '加载中...',
                    forbidClick: true,
                });

            } else {
                console.log("登录失败")
            }
        }
    }

}
</script>

<style lang="less">
.help {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
}
</style>