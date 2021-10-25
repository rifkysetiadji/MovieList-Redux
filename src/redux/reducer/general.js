import * as actionType from '../constant/general'

const initialState={
    isLoading:false,
    isLoadingSkeleton:false,
    modal:{
        modal_open:false,
        modal_data:null,
        modal_title:'',
        modal_component:'',
        modal_size:400,
        modal_type:'',
        modal_action:''
    }
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case actionType.SET_LOADING:
            return{
                ...state,
                isLoading:action.payload
            }
        case actionType.SET_LOADING_SKELETON:
            return{
                ...state,
                isLoadingSkeleton:action.payload
            }
        case actionType.SET_MODAL:
            return{
                ...state,
                modal:{
                    modal_open:action.payload.modal_open,
                    modal_data:action.payload.modal_data,
                    modal_title:action.payload.modal_title,
                    modal_component:action.payload.modal_component,
                    modal_size:action.payload.modal_size,
                    modal_type:action.payload.modal_type,
                    modal_action:action.payload.modal_action
                }
            }
        case actionType.MODAL_RESET:
            return{
                ...state,
                modal:{
                    modal_open:false,
                    modal_data:null,
                    modal_title:'',
                    modal_component:'',
                    modal_size:400,
                    modal_type:'',
                    modal_action:''
                }
            }
        default:
            return state;
    }
}