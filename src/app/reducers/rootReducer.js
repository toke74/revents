import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import testReducer from "../../features/testArea/testReducer";
import eventReducer from "../../features/event/eventReducer";
import modalsReducer from '../../features/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';

const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducer,
  form: formReducer,
  modals: modalsReducer,
  auth:authReducer
});
export default rootReducer;
