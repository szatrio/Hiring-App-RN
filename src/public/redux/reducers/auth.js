const initialState = {
    id_user: '',
    email: '',
    token: '',
    role: '',
    isLogin: false
}

const auth = (state = initialState, action) => {
    switch (action.type){
        case 'LOGIN_FULFILLED':
            return {
                ...state,
                isLogin: true,
                id_user: '',
                email: '',
                token: '',
                role: ''
            }
    }
}