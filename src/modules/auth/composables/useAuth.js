import { computed } from 'vue';
import { useStore } from 'vuex';


const useAuth = ()=>{
    const store = useStore()

    const createUser = async(user) =>{
        console.log(user);
        const resp =await store.dispatch ('auth/createUser',user)
        //return {ok:false, message: 'EMAIL_EXISTS'}
        //un dispatch es ejecutar una accion o una peticion al backend
        //TO:DO store.dispatch ('auth/createUser',user)
        //FALTARIA HACER LA MUTATION PARA HACER EL LOGINUSER
       
        return resp
    }
    
    const loginUser = async(user) => {
        const resp =await store.dispatch ('auth/signInUser',user)
        return resp
    }

    const checkAuthStatus = async() => {
        const resp =await store.dispatch ('auth/checkAuthentication')
        return resp
    }

    const getStatus = async() => {
        const resp = await store.getters['auth/currentState']
        return resp
    }

    const logout = () => {
        //console.log('pasando por el logout/commit');
        store.commit('auth/logout');
    }

    return {
         createUser,
         loginUser,
         checkAuthStatus,
         authStatus:computed(() => store.getters['auth/currentStatus']),
         username:computed(() =>store.getters['auth/username']),
         getStatus,
         logout
    }           
}


export default useAuth
