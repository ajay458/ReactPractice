import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import forbiddenWordsMiddleware from '../middleware/index';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//for using Redux Dev Tools together with other middlewares here’s what you should do (notice the use of compose):
const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
    );


export default store;