const initialState = {
    page: '',
    pages: '',
    total: '',
    sort:'ASC',
    engineersList: []
}

const getEngineersReducer = (state = initialState, action) => {
    switch (action.type){
        case 'GET_ENGINEERS_FULFILLED':
            // console.log(JSON.stringify(action.payload, null, 4), "ini payload get engineers")
            return {
                ...state,
                page: action.payload.page,
                pages: action.payload.pages,
                total: action.payload.total,
                engineersList: action.payload.response,
            }
        default:
            return state
    }
}

export default getEngineersReducer