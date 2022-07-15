import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socket from '../socket';
import styles from './Chat.module.css';

function Chat() {
  const [messageValue, setMessageValue] = React.useState('');
  const messagesRef = React.useRef(null);
  const dispatch = useDispatch();

  const {
    users, messages, userName, roomId
  } = useSelector((s) => s.chat);

  const memoMessagesMap = useMemo(() => [...new Set(messages)], [messages]);

  const onSendMessage = () => {
    socket.emit('ROOM:NEW_MESSAGE', {
      userName,
      roomId,
      text: messageValue,
    });
    setMessageValue('');
  };

  React.useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  }, [messages]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.chat}>
        <div className={styles.chatusers}>
          Комната:
          {' '}
          <b>{roomId}</b>
          <hr />
          <b>
            Онлайн (
            {users.length}
            ):
          </b>
          <ul>
            {users.map((name, index) => (
              <li key={name + index}>{name}</li>
            ))}
          </ul>
        </div>
        <div className={styles.chatmessages}>
          <div ref={messagesRef} className={styles.messages}>
            {memoMessagesMap && memoMessagesMap.map((message) => (
              <div className={styles.message}>
                <p>{message.text}</p>
                <div>
                  <span>{message.userName}</span>
                </div>
              </div>
            ))}
          </div>
          <form>
            <textarea
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
              className={styles.formcontrol}
              rows="3"
            />
            <button onClick={onSendMessage} type="button" className="btn btn-primary">
              Отправить
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Chat;
