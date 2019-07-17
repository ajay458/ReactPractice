import { ADD_ARTICLE } from "../constants/action-types";
const forbiddenWords = ["spam", "money"];

const forbiddenWordMiddelWare = function({dispatch}){
    return function(next){
        return function(action){
            if(action.type === ADD_ARTICLE){
                const title = action.payload.title;
                if(forbiddenWords.includes(title))
                return dispatch({ type: "FOUND_BAD_WORD" });
            }
            
            return next(action);
        }
    }
}
export default forbiddenWordMiddelWare;