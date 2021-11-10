import { actionTypes, languages } from "../../../constants/actionTypes";

export const languageReducer = (state = languages.uzbek, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_TO_UZBEK:
            return languages.uzbek;
        case actionTypes.CHANGE_TO_ENGLISH:
            return languages.english;
        default:
            return state;
    }
}