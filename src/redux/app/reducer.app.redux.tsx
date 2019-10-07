import { AppStateType, AppTypesOfState } from "./type.app.redux"
import { UPDATE_BTN_MENU_TOGGLE } from "../constant.redux"

const initialDefaultState: AppStateType = {
    btnMenuToggle : false,
}


const AppReducer = (
    states = initialDefaultState,
    action : AppTypesOfState
) : AppStateType =>{
    switch(action.type){
        case UPDATE_BTN_MENU_TOGGLE : 
        states.btnMenuToggle = action.btnMenuToggle;
        return {
            ...states
        }

        default : return{
            ...states
        }
    }
}

export default AppReducer;