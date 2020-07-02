import {combineReducers} from "redux";
import common from './common/reducer';
import employees from './employees/reducer';
import organisations from './organisations/reducer';

const rootReducer = combineReducers( {
    common,
    employees,
    organisations
});

export default rootReducer

