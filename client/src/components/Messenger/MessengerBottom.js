import React, { useState } from 'react';
import { connect } from 'react-redux';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import GifIcon from '@material-ui/icons/Gif';
import InputBase from '@material-ui/core/InputBase';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';

import { sendMess } from '../../redux/action/mesengerAction';

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: '20px',
  },
  icon: {
    margin: '0 5px',
    cursor: 'pointer',
    color: 'rgb(0, 153, 255)',
  },
}));

const MessengerBottom = ({ sendMess, receiverId }) => {
  const classes = useStyles();
  const [text, setText] = useState('');

  const onSend = () => {
    sendMess(text, receiverId);
    setText('');
  };

  return (
    <div
      className='footer'
      style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <AddCircleIcon className={classes.icon} />
      <GifIcon className={classes.icon} />
      <CropOriginalIcon className={classes.icon} />
      <AttachFileIcon className={classes.icon} />

      <InputBase
        placeholder='Nhập tin nhắn...'
        value={text}
        name='text'
        onChange={(e) => {
          setText(e.target.value);
        }}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
      {text !== '' ? (
        <SendIcon className={classes.icon} onClick={onSend} />
      ) : (
        <ThumbUpIcon className={classes.icon} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  receiverId: state.conversation.receiverId,
});

export default connect(mapStateToProps, { sendMess })(MessengerBottom);
