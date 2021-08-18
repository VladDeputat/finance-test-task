import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { socket } from '../../helpers/socket';
import { setConnect } from '../../redux/params/params-operations';
import { connectionSelector } from '../../redux/params/params-selectors';
import {
  connectionButtonBox,
  connectionButton,
  connectionButton_connect,
} from './ConnectionButton.module.scss';

const ConnectionButton = () => {
  const dispatch = useDispatch();
  const connect = useSelector(connectionSelector);
  const [isConnected, setConnection] = useState(true);

  useEffect(() => {
    dispatch(setConnect(isConnected));
  }, [isConnected, dispatch]);

  useEffect(() => {
    !connect ? socket.disconnect() : socket.connect(socket.emit('start'));
  }, [connect]);

  return (
    <div className={connectionButtonBox}>
      <button
        type="button"
        className={connect ? connectionButton : connectionButton_connect}
        onClick={() => setConnection(!isConnected)}
      >
        {connect ? 'Disconnect' : 'Connect'}
      </button>
    </div>
  );
};

export default ConnectionButton;
