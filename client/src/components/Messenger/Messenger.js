import React, { createRef, useEffect, useState } from 'react';

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

const Messenger = () => {
  const messagesEndRef = createRef();
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, []);
  const { height } = useWindowDimensions();

  return (
    <div style={{ height: height - 179 }} className='messenger' id='scrollBar'>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <p>Vu Thanh hieu</p>
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messenger;
