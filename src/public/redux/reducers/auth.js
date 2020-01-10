const initialState = {
    id_user: '',
    email: '',
    token: '',
    role: '',
    userCompany: '',
    userEngineer: '',
    isLogin: false
}

const Auth = (state = initialState, action) => {
    switch (action.type){
        case 'LOGIN_FULFILLED':
            console.log(action.payload.userEngineer, "ini payload")
            return {
                ...state,
                isLogin: true,
                id_user: action.payload.id_user,
                email: action.payload.email,
                token: action.payload.token,
                role: action.payload.role,
                userCompany: action.payload.userCompany,
                userEngineer: action.payload.userEngineer,
            }
        default:
            return state
    }
}

export default Auth