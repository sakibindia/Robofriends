import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
    } from './constant';
const initialState = {
    searchField:''
}

export const searchRobots = (state=initialState,action={})=>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({},state,{ searchField:action.payload })
        
        default:
            return state;
    }

}
const initialStateRobots = {
    robots: [],
    isPending: true
  }

export const requestRobots = (state = initialStateRobots,action = {} )=> {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:{
            console.log("^^^^^^pending state^^^^^^^")
            return Object.assign({},state,{isPending:true})
        }

        case REQUEST_ROBOTS_SUCCESS:{
            console.log("^^^^^success^^^^^^^^")
            return Object.assign({},state,{robots:action.payload,isPending:false})
        }

        case REQUEST_ROBOTS_FAILED:{
            console.log("^^^^^Failed^^^^^^^^")
            return Object.assign({},state,{error:action.payload,isPending:false})
        }

        default:
            return state
        

    }
}