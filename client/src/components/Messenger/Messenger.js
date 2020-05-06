import React, { createRef, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';

import useWindowDimensions from '../Layout/getWidthHeight';
import MessengerItem from './MessengerItem';
import './Messenger.css';

import { socket } from '../../App';

import { getMess, addMess } from '../../redux/action/messengerAction';
import {
  getConversation,
  getConversationLatest,
} from '../../redux/action/conversationAction';

const Messenger = ({
  messenger: { messengers, loading },
  currentConversationId,
  getMess,
  addMess,
  getConversation,
}) => {
  const messagesEndRef = createRef();
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messengers]);

  useEffect(() => {
    if (currentConversationId && messengers.length <= 0) {
      getMess(currentConversationId);
    }
    // eslint-disable-next-line
  }, [currentConversationId]);

  useEffect(() => {
    socket.emit('join', currentConversationId);
  }, [currentConversationId]);

  useEffect(() => {
    socket.on('messenger', (messenger) => {
      addMess(messenger);
      getConversationLatest();
      getConversation();
    });
    // eslint-disable-next-line
  }, []);

  const { height } = useWindowDimensions();

  return (
    <div style={{ height: height - 169 }} className='messenger' id='scrollBar'>
      {loading ? (
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
        messengers.length > 0 &&
        messengers.map((messenger, i) => (
          <MessengerItem key={i} messenger={messenger} />
        ))
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  messenger: state.messenger,
  currentConversationId: state.conversation.currentConversationId,
});

export default connect(mapStateToProps, { getMess, addMess, getConversation })(
  Messenger
);
