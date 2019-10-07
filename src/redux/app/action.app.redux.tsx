import { AppTypesOfState } from "./type.app.redux";
import { UPDATE_BTN_MENU_TOGGLE } from "../constant.redux";

export const updateMenuBtnToggleState = (toggle : boolean) : AppTypesOfState => {
    return {
        type : UPDATE_BTN_MENU_TOGGLE,
        btnMenuToggle : toggle
    }
}