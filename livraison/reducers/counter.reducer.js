import authReducer from './auth.reducer';
import couterReducer from './counter.reducer';

const allReducers = combineReducers({
    token : authReducer
})

export default allReducers; 