
// export const myAction = ( state ) => {

// }

export const loginUser = ( state,{user,idToken,user_role=''} ) => {
    //console.log('entrando al topken'+idToken);
    if(idToken)
    {
        //console.log('hay token ps');
        localStorage.setItem('idToken',idToken)
        state.idToken=idToken
    }

    state.user = user;
    state.status = 'authenticated';
    state.role =user_role;
    // if(refreshToken)
    // {
    //     localStorage.setItem('refreshToken',refreshToken)
    //     state.refreshToken=refreshToken
    // }
}
export const logout = (state) => {
    state.user=null
    state.idToken=null
    state.role=null
    state.status='not-authenticated'

    localStorage.removeItem('idToken');
    
}