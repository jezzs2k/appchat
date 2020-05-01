import React from 'react';

import Conversation from '../Conversation/Conversation';
import MessengerTop from '../Messenger/MessengerTop';
import Messenger from '../Messenger/Messenger';
import MessengerBottom from '../Messenger/MessengerBottom';

const ChatUi = () => {
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
