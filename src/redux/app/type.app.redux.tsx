import { UPDATE_BTN_MENU_TOGGLE } from "../constant.redux";

export interface AppStateType{
    btnMenuToggle : boolean
}

interface ActUpdateBtnMenuToggleStateType{
        type :typeof UPDATE_BTN_MENU_TOGGLE,
        btnMenuToggle : boolean
}

export type AppTypesOfState = ActUpdateBtnMenuToggleStateType;