import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const MessengerItem = ({ messenger }) => {
  const { text, sender, receiver } = messenger;
  return (
    <div style={{ width: '100%' }}>
      {sender && (
        <div
          className='sender'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: '3px',
            paddingRight: '10px',
          }}>
          <p
            style={{
              backgroundColor: '#0099ff',
              maxWidth: '30%',
              padding: '8px',
              wordBreak: 'break-word',
              borderRadius: '30px',
            }}>
            {text}
          </p>
          <Avatar
            alt={sender.name}
            src={sender.avatar}
            style={{ marginLeft: '20px' }}
          />
        </div>
      )}
      {receiver && (
        <div
          className='receiver'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: '10px',
          }}>
          <Avatar
            alt={receiver.name}
            src={receiver.avatar}
            style={{ marginRight: '20px' }}
          />
          <p
            style={{
              backgroundColor: '#f1f0f0',
              maxWidth: '30%',
              padding: '8px',
              wordBreak: 'break-word',
              borderRadius: '30px',
            }}>
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

export default MessengerItem;
