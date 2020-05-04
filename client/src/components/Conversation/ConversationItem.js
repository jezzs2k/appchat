import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

import './conversationItem.css';

const ConversationItem = ({
  item,
  index,
  selectedIndex,
  handleListItemClick,
  userId,
}) => {
  const { sender, receiver, lastMess } = item;

  return (
    <ListItem
      button
      selected={selectedIndex === index}
      onClick={(event) =>
        sender._id === userId
          ? handleListItemClick(event, index, item._id, receiver._id)
          : handleListItemClick(event, index, item._id, sender._id)
      }
      style={{
        borderRadius: '15px',
        backGroundColor: '#f2f2f2',
        fontSize: '0.8em',
      }}>
      <ListItemIcon>
        {sender._id === userId ? (
          <Avatar alt={receiver.name} src={receiver.avatar} />
        ) : (
          <Avatar alt={sender.name} src={sender.avatar} />
        )}
      </ListItemIcon>
      {sender._id === userId ? (
        <ListItemText primary={receiver.name} secondary={`${lastMess} 15:05`} />
      ) : (
        <ListItemText primary={sender.name} secondary={`${lastMess} 15:05`} />
      )}
      <Button>
        <MoreHorizOutlinedIcon />
      </Button>
    </ListItem>
  );
};

export default ConversationItem;
