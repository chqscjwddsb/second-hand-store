<template>

    <div class="userPannel">
        <div class="logined" v-if="isLogin">
            <div class="ptoName">
                <van-image round width="6rem" height="6rem"
                    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                <h2 class="name">张三</h2>
            </div>
            <div class="achievement">
                <div class="item"><span>0</span>收藏</div>
                <div class="item"><span>0</span>历史浏览</div>
                <div class="item"><span>0</span>关注</div>
                <div class="item"><span>0</span>粉丝</div>
                <div class="item"><span>0</span>帖子</div>
            </div>
        </div>
        <div class="notLogin" v-else>
            <div class="ptoName">
                <van-image round width="6rem" height="6rem" src="" />
                <h2 class="name"><a href="javascript:;" @click="$router.push('/login')">登录/注册</a></h2>

            </div>
            <div class="achievement">
                <div class="item"><span>0</span>收藏</div>
                <div class="item"><span>0</span>历史浏览</div>
                <div class="item"><span>0</span>关注</div>
                <div class="item"><span>0</span>粉丝</div>
                <div class="item"><span>0</span>帖子</div>
            </div>

        </div>

        <van-cell-group>
            <van-cell title="单元格" clickable />
            <van-cell title="单元格" clickable />
            <van-cell title="单元格" clickable />
            <van-cell title="单元格" clickable />
            <van-cell title="单元格" clickable />
            <van-cell title="单元格" clickable />
            <van-button round color="linear-gradient(to right, #ff6034, #ee0a24)" size="large"
                @click="logOut" v-if="isLogin">
                退出登录
            </van-button>
        </van-cell-group>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import {useRouter} from 'vue-router'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()
        const router = useRouter()
        let isLogin = computed(() => {
            if (store.state.user) {
                return true
            } else {
                return false
            }
        })
        const logOut = ()=>{
            store.commit('logOut')
        }
        return {
            isLogin,
            logOut,
            router
        }
    }
}
</script>

<style lang="less">
.logined,
.notLogin {
    width: 100%;
    height: 200px;
    background-color: skyblue;
}

// 双伪标签结局flex高度塌陷
.logined::before,
.logined::after,
.notLogin::before,
.notLogin::after {
    content: "";
    display: table;
}

.logined::after,
.notLogin::after {
    clear: both;
}

.logined::after,
.notLogin::after {
    *zoom: 1;
}



.ptoName {
    margin: 10px;
    display: flex;
    align-items: center;
}

.name {
    margin-left: 20px;
}

.achievement {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
}

.item {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>