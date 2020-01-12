const initialState = {
    isLoading: false,
    isError: false,
    engineer: [],
  }
  
  const engDetailsReducer = (state=initialState, action) => {
    switch(action.type){
       
        case "ENGINEER_DETAIL":
          console.log(action.payload, "action payload")
          return{
                    ...state,
                    engineer: action.payload
                  }
        default:
            return state
    }
  }
  
  export default engDetailsReducer