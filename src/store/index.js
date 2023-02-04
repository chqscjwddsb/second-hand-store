import {createStore} from 'vuex'

export default createStore({
    state:{
        user:localStorage.getItem('user') || ''
    },
    mutations:{
        setUser(state,userInfo){
            localStorage.setItem('user',userInfo)
            state.user = localStorage.getItem('user')
        },
        logOut(state){
            localStorage.setItem('user',"")
            state.user  = ''
        }
    }, 
    actions:{
        
    }
})