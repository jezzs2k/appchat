import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Conversation from '../Conversation/Conversation';
import MessengerTop from '../Messenger/MessengerTop';
import Messenger from '../Messenger/Messenger';
import MessengerBottom from '../Messenger/MessengerBottom';

const ChatUi = () => {
  if (!localStorage.token) {
    return (
      <Fragment>
        <h2>Ban phai dang nhap truoc khi su dung app</h2>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </Fragment>
    );
  }
  return (
    <div className='Messenger'>
      <div className='left' id='scrollBar2'>
        <Conversation />
      </div>
      <div className='right'>
        <div className='top'>
          <MessengerTop />
        </div>
        <div className='content'>
          <Messenger />
        </div>
        <div className='bottom'>
          <MessengerBottom />
        </div>
      </div>
    </div>
  );
};

export default ChatUi;
