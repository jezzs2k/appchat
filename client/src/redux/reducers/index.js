import { combineReducers } from 'redux';

import authReducer from './authReducer';
import messengerReducer from './messengerReducer';
import conversationReducer from './conversationReducer';

export default combineReducers({
  auth: authReducer,
  messenger: messengerReducer,
  conversation: conversationReducer,
});
