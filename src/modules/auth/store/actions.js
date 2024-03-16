
// export const myAction = async ({ commit }) => {

import authApi from "@/api/authApi";

// }


export const createUser = async ({ commit },user ) => {

    const {name, email, password} = user    

    try {
        const {data} = await authApi.post('/administracion/inscribirEstudiante/',{ "ci_estudiante":name,"ids_mallas":[43,44,45,46,47,48,49,50]})
        //const {idToken} = data;
        const idToken = '123456789';
        console.log(data);
        console.log(email,password);
        console.log(commit);
        //FALTA HACER EL MUTATAION LOGINUSER   
        delete user.password
        commit('loginUser',{user,idToken})
        if(!data.message)
        {
            return {ok:true}
        }else{
            return {ok:false,message:data.message}
        }
        
        
    } catch (error) {
        console.log(error.response);
        return {ok:false,message:'....'}
    }

}


export const signInUser = async ({ commit },user ) => {

    // const {name, password} = user    
    const {name} = user    

    try {
        //la peticion va con el name y el password
        const {data} = await authApi.post('/administracion/inscribirEstudiante/',{ "ci_estudiante":name,"ids_mallas":[43,44,45,46,47,48,49,50]})
        //AKI HACEMOS LA CONSULTA
        //const {data} = await authApi.post('/administracion/login/',{
            //"username":"johnny2",
             //"password":"dosmas2@"
            // "username":name,
            // "password":password
        //})        
        
        //AKI PASAMOS EL TOKEN
        //const {idToken} = data;  
        // const {token} = data;  
        // const idToken= token;
        // console.log(access+'ke pasa ps'+token);
        
        //const {idToken,user_role} = data;

        //tenemos que sacar de la data el token que se hace desde el backend
        const idToken = '123456789';
        const user_role = 'ADMIN_ROLE';

        //{'ADMINISTRATION_ROLE','DOCENTE_ROLE','ESTUDIANTE_ROLE'}
        //console.log(data);
        //console.log(email,password);
        //console.log(password);
        //console.log(commit);
        //FALTA HACER EL MUTATAION LOGINUSER   
        //delete user.password
        //commit('loginUser',{user,idToken,user_role})
        commit('loginUser',{user,idToken,user_role})
        //el error por le momento solo puede venir si las credenciales son incorrectas
        //if(!data.message)
        if(!data.error)
        {
            return {ok:true}
        }else{
            return {ok:false,message:data.error}
        }               
    } catch (error) {
        //console.log(error.response.data.detail);
        //return {ok:false,message:'....'}
        //return {ok:false,message:error.response.data.detail}
        return {ok:false,message:'Nombre de Usuario y/o Constraseña Incorrectos'}
    }
}

 export const checkAuthentication = async ({ commit }) => {

    const idToken = localStorage.getItem('idToken')
    const cedula = '12778846'
    //no hay idtoken salimos de la aplicacion
    if(!idToken)
    {
        commit('logout')
        return {ok:false,message:'No hay token'}
    }

    try {
        //en esta seccion llamamps al endpoint que dado un idToken me retorne un usuario
        const {data} = await authApi.get('/estudiantes/estudiantes/'+cedula+'/')
        //deberiamos obtener const {nombres, password, user_role} = data
        //const  { nombres, password:ci_estudiante } = data
        const  { nombres,apellidoP,apellidoM, password:ci_estudiante } = data
        const user_role = 'ADMIN_ROLE';
        //nos creamos un nuevo usuario con los datos del backend
        //{nombres, password,role}
        const user = {
            name:`${apellidoP} ${apellidoM} ${nombres}`,
            password:ci_estudiante,
            user_role:user_role
        }

        console.log('check plus');
        commit('loginUser',{user,idToken,user_role})
        console.log('pasando');
        return {ok : true}    
    } catch (error) {
        commit('logout')
        return {ok:false,message:error}
    }
 }