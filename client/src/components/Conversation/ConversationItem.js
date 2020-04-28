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
}) => {
  const { name, avatar, lastMess } = item;
  return (
    <ListItem
      button
      selected={selectedIndex === index}
      onClick={(event) => handleListItemClick(event, index)}
      style={{
        borderRadius: '15px',
        backGroundColor: '#f2f2f2',
        fontSize: '0.8em',
      }}>
      <ListItemIcon>
        <Avatar alt={name} src={avatar} />
      </ListItemIcon>
      <ListItemText primary={name} secondary={`${lastMess} 15:05`} />
      <Button>
        <MoreHorizOutlinedIcon />
      </Button>
    </ListItem>
  );
};

export default ConversationItem;
