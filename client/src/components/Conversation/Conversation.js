import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Skeleton from '@material-ui/lab/Skeleton';

import ConversationItem from './ConversationItem';
import { getMess } from '../../redux/action/messengerAction';
import { setReceiver } from '../../redux/action/conversationAction';

import {
  getConversation,
  getConversationLatest,
  setLoading,
  setCurrentConversation,
} from '../../redux/action/conversationAction';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    borderRight: '1px solid #e5e5e5',
    padding: '0 5px',
  },
}));

const Conversation = ({
  conversation: { conversations, loading, latestConversation },
  getConversation,
  getConversationLatest,
  setLoading,
  user,
  setReceiver,
  setCurrentConversation,
  getMess,
}) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index, conversationId, receiverId) => {
    setSelectedIndex(index);
    setCurrentConversation(conversationId);
    setReceiver(receiverId);
    getMess(conversationId);
  };

  useEffect(() => {
    setLoading();
    getConversationLatest();
    getConversation();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (latestConversation) {
      setCurrentConversation(latestConversation._id);
      const receiverId =
        user._id === latestConversation.receiver._id
          ? latestConversation.sender._id
          : latestConversation.receiver._id;
      setReceiver(receiverId);
    }
    // eslint-disable-next-line
  }, [latestConversation]);

  return (
    <div className={classes.root}>
      <List component='nav' aria-label='main mailbox folders'>
        {loading ? (
          <div>
            <Skeleton variant='text' />
            <Skeleton variant='circle' width={40} height={40} />
            <Skeleton variant='rect' style={{ width: '100%' }} height={118} />
            <Skeleton variant='text' />
            <Skeleton variant='circle' width={40} height={40} />
            <Skeleton variant='rect' style={{ width: '100%' }} height={118} />
            <Skeleton variant='text' />
            <Skeleton variant='circle' width={40} height={40} />
            <Skeleton variant='rect' style={{ width: '100%' }} height={118} />
            <Skeleton variant='text' />
            <Skeleton variant='circle' width={40} height={40} />
            <Skeleton variant='rect' style={{ width: '100%' }} height={118} />
            <Skeleton variant='text' />
            <Skeleton variant='circle' width={40} height={40} />
            <Skeleton variant='rect' style={{ width: '100%' }} height={118} />
            <Skeleton variant='text' />
            <Skeleton variant='circle' width={40} height={40} />
            <Skeleton variant='rect' style={{ width: '100%' }} height={118} />
            <Skeleton variant='text' />
            <Skeleton variant='circle' width={40} height={40} />
            <Skeleton variant='rect' style={{ width: '100%' }} height={118} />
            <Skeleton variant='text' />
            <Skeleton variant='circle' width={40} height={40} />
            <Skeleton variant='rect' style={{ width: '100%' }} height={118} />
          </div>
        ) : (
          conversations.length > 0 &&
          conversations.map((item, i) => (
            <ConversationItem
              key={item._id}
              item={item}
              selectedIndex={selectedIndex}
              handleListItemClick={handleListItemClick}
              index={i}
              userId={user._id}
            />
          ))
        )}
      </List>
    </div>
  );
};

const mapStateToProps = (state) => ({
  conversation: state.conversation,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  getConversation,
  getConversationLatest,
  setLoading,
  getMess,
  setReceiver,
  setCurrentConversation,
})(Conversation);
