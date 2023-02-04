<template>
    <van-nav-bar title="注册" left-text="返回" left-arrow @click-left="$router.back()"></van-nav-bar>
    <van-form>
        <van-cell-group>
            <van-field v-model="mobile" label="用户名" placeholder="请输入用户名"
                :rules="[{ required: true, message: '请输入手机号' },{
                    validator:mobilePattern,message:'手机号码格式错误'
                }]" />
            <van-field v-model="password" label="密码" placeholder="请输入密码"
                :rules="[{ required: true, message: '请输入密码' },{
                    validator:passwordPattern,message:'密码6-13位'
                }]" />
            <van-field v-model="repassword" label="确认密码" placeholder="确定密码"
                :rules="[{ required: true, message: '请输入密码' },{
                    validator:passwordPattern,message:'密码6-13位'
                }]" />
            
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                提交
            </van-button>
        </div>
        
    </van-form>
</template>

<script>
import  {ref} from 'vue'
export default {
    name:"regist",
    setup(){
        const mobile = ref('')
        const password = ref('')
        const repassword = ref('')
        // 手机号校验
        const mobilePattern = (val)=>/^1[3,8,9,7]{1}\d{9}$/.test(val)
        // 密码校验
        const passwordPattern = (val)=>/^[\s\S]{6,10}$/.test(val)

        return {
            mobile, password, mobilePattern,passwordPattern,repassword
        }
    }
}
</script>

<style>

</style>