import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import ConversationItem from './ConversationItem';

const dataDemo = [
  {
    _id: 1,
    name: 'Just is demo name',
    avatar: 'https://picsum.photos/id/237/200/300',
    lastMess: 'Xin Chao',
  },
  {
    _id: 2,
    name: 'Just is demo name',
    avatar: 'https://picsum.photos/id/237/200/300',
    lastMess: 'Xin Chao',
  },
  {
    _id: 3,
    name: 'Just is demo name',
    avatar: 'https://picsum.photos/id/237/200/300',
    lastMess: 'Xin Chao',
  },
  {
    _id: 4,
    name: 'Just is demo name',
    avatar: 'https://picsum.photos/id/237/200/300',
    lastMess: 'Xin Chao',
  },
  {
    _id: 5,
    name: 'Just is demo name',
    avatar: 'https://picsum.photos/id/237/200/300',
    lastMess: 'Xin Chao',
  },
  {
    _id: 6,
    name: 'Just is demo name',
    avatar: 'https://picsum.photos/id/237/200/300',
    lastMess: 'Xin Chao',
  },
  {
    _id: 7,
    name: 'Just is demo name',
    avatar: 'https://picsum.photos/id/237/200/300',
    lastMess: 'Xin Chao',
  },
  {
    _id: 8,
    name: 'Just is demo name',
    avatar: 'https://picsum.photos/id/237/200/300',
    lastMess: 'Xin Chao',
  },
  {
    _id: 9,
    name: 'Just is demo name',
    avatar: 'https://picsum.photos/id/237/200/300',
    lastMess: 'Xin Chao',
  },
  {
    _id: 10,
    name: 'Just is demo name',
    avatar: 'https://picsum.photos/id/237/200/300',
    lastMess: 'Xin Chao',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    borderRight: '1px solid #f2f2f2',
    padding: '0 5px',
  },
}));

const Conversation = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <List component='nav' aria-label='main mailbox folders'>
        {dataDemo.length > 0 &&
          dataDemo.map((item, i) => (
            <ConversationItem
              key={item._id}
              item={item}
              selectedIndex={selectedIndex}
              handleListItemClick={handleListItemClick}
              index={i}
            />
          ))}
      </List>
    </div>
  );
};

export default Conversation;
