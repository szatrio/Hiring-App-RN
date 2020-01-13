const initialState = {
    isLoading: false,
    isError: false,
    projects: [],
  }
  
  const Project = (state=initialState, action) => {
    switch(action.type){
        case "GET_PROJECT":
          console.log(action.payload, "action payload")
          return{
                    ...state,
                    projects: action.payload
                  }
        default:
            return state
    }
  }
  
  export default Project