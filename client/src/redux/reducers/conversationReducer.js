import {
  GET_CONVERSATION,
  GET_ERROR,
  GET_CONVERSATION_LATEST,
  SET_LOADING,
  SET_RECEIVER,
  SET_CURRENT_CONVERSATION,
} from '../action/types';

const initalState = {
  conversations: [],
  latestConversation: null,
  error: null,
  loading: null,
  receiverId: null,
  currentConversationId: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case GET_CONVERSATION:
      return {
        ...state,
        conversations: [...action.payload.data.data.conversations],
        error: null,
        loading: false,
        latestConversation: null,
      };

    case GET_CONVERSATION_LATEST:
      return {
        ...state,
        latestConversation: action.payload.data.data.latestConversation,
      };
    case SET_RECEIVER:
      return {
        ...state,
        receiverId: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_CURRENT_CONVERSATION:
      return {
        ...state,
        currentConversationId: action.payload,
      };
    case GET_ERROR: {
      return {
        ...state,
        conversations: [],
        error: action.payload,
        loading: false,
        latestConversation: null,
      };
    }
    default:
      return { ...state };
  }
};
