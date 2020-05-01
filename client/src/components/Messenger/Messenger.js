import React, { createRef, useEffect, useState } from 'react';

import MessengerItem from './MessengerItem';
import './Messenger.css';

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

//
const dataDemo = [
  {
    sender: {
      name: 'Vu Thanh Hieu',
      avatar: 'sss',
    },
    receiver: {
      name: 'Phan thanh hung',
      avatar: 'hsss',
    },
    text: 'hey',
  },
  {
    sender: {
      name: 'Phan Thanh Hung',
      avatar: 'hsss',
    },
    receiver: {
      name: 'Vu Thanh Hieu',
      avatar: 'sss',
    },
    text: 'dadasdasdkjaskd',
  },
  {
    sender: {
      name: 'Vu Thanh Hieu',
      avatar: 'sss',
    },
    receiver: {
      name: 'Phan thanh hung',
      avatar: 'sss',
    },
    text: 'palapdacnakdasdkadnksad',
  },
  {
    sender: {
      name: 'Phan Thanh Hung',
      avatar: 'hsss',
    },
    receiver: {
      name: 'Vu Thanh Hieu',
      avatar: 'sss',
    },
    text:
      'dadasdasdkdsdsdsdsjaskddadasdasdkdsdsdsdsjaskddadasdasdkdsdsdsdsjaskddadasdasdkdsdsdsdsjaskd',
  },
  {
    sender: {
      name: 'Phan Thanh Hung',
      avatar: 'hsss',
    },
    text:
      'dadasdasdkdsdsdsdsjaskddadasdasdkdsdsdsdsjaskddadasdasdkdsdsdsdsjaskddadasdasdkdsdsdsdsjaskd',
  },
  {
    sender: {
      name: 'Phan Thanh Hung',
      avatar: 'hsss',
    },
    text:
      'dadasdasdkdsdsdsdsjaskddadasdasdkdsdsdsdsjaskddadasdasdkdsdsdsdsjaskddadasdasdkdsdsdsdsjaskd',
  },
];
//

const Messenger = () => {
  const messagesEndRef = createRef();
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, []);
  const { height } = useWindowDimensions();

  return (
    <div style={{ height: height - 169 }} className='messenger' id='scrollBar'>
      {dataDemo.length > 0 &&
        dataDemo.map((messenger, i) => (
          <MessengerItem key={i} messenger={messenger} />
        ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messenger;
