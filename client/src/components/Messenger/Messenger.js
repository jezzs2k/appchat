import React, { createRef, useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';

import MessengerItem from './MessengerItem';
import './Messenger.css';

import {
  getMess,
  addMess,
  setLoading,
} from '../../redux/action/mesengerAction';

import {
  getConversationLatest,
  setReceiver,
  getConversation,
  setCurrentConversation,
} from '../../redux/action/conversationAction';

import { socket } from '../../App';

function getWindowDimensions() {
  const { innerHeight: height } = window;
  return {
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Messenger = ({
  getMess,
  messenger,
  isAuthenticated,
  addMess,
  setLoading,
  getConversationLatest,
  latestConversation,
  user,
  setReceiver,
  conversation,
  getConversation,
  setCurrentConversation,
}) => {
  const messagesEndRef = createRef();

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messenger.messengers]);

  useEffect(() => {
    if (isAuthenticated) {
      setLoading();
      getConversationLatest();
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  useEffect(() => {
    if (latestConversation !== null) {
      const userId = user._id;
      const contactId =
        userId === latestConversation.sender._id
          ? latestConversation.receiver._id
          : latestConversation.sender._id;
      setCurrentConversation(latestConversation._id);
      setReceiver(contactId);
      getMess(latestConversation._id);
    }
    // eslint-disable-next-line
  }, [latestConversation]);

  useEffect(() => {
    if (conversation.currentConversationId !== null) {
      socket.on('messenger', (messenger) => {
        if (conversation.currentConversationId === messenger.conversationId) {
          addMess(messenger);
        }
        getConversation();
      });
    }
    // eslint-disable-next-line
  }, [conversation.currentConversationId]);

  const { height } = useWindowDimensions();

  return (
    <div style={{ height: height - 169 }} className='messenger' id='scrollBar'>
      {messenger.loading ? (
        <Fragment>
          <div style={{ width: '100%' }}>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation='wave' />
          </div>
          <div style={{ width: '100%' }}>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation='wave' />
          </div>
          <div style={{ width: '100%' }}>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation='wave' />
          </div>
          <div style={{ width: '100%' }}>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation='wave' />
          </div>
          <div style={{ width: '100%' }}>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation='wave' />
          </div>
          <div style={{ width: '100%' }}>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation='wave' />
          </div>
          <div style={{ width: '100%' }}>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation='wave' />
          </div>
          <div style={{ width: '100%' }}>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation='wave' />
          </div>
          <div style={{ width: '100%' }}>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation='wave' />
          </div>
        </Fragment>
      ) : (
        messenger &&
        messenger.messengers.length > 0 &&
        messenger.messengers.map((messenger, i) => (
          <MessengerItem key={i} messenger={messenger} />
        ))
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  messenger: state.messenger,
  isAuthenticated: state.auth.isAuthenticated,
  latestConversation: state.conversation.latestConversation,
  user: state.auth.user,
  conversation: state.conversation,
});

export default connect(mapStateToProps, {
  getMess,
  addMess,
  setLoading,
  getConversationLatest,
  setReceiver,
  getConversation,
  setCurrentConversation,
})(Messenger);
