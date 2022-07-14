import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socket from '../socket';
import chatCSS from './Chat.module.css';
import { addMessage } from '../../../../redux/actions/chatActions';

function Chat() {
  const [messageValue, setMessageValue] = React.useState('');
  const messagesRef = React.useRef(null);
  const dispatch = useDispatch();

  const {
    users, messages, userName, roomId
  } = useSelector((s) => s.chat);

  const onSendMessage = () => {
    socket.emit('ROOM:NEW_MESSAGE', {
      userName,
      roomId,
      text: messageValue,
    });
    dispatch(addMessage({ userName, text: messageValue }));
    setMessageValue('');
  };

  React.useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  }, [messages]);

  return (
    <div className={chatCSS.wrapper}>
      <div className="chat">
        <div className="chat-users">
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
        <div className="chat-messages">
          <div ref={messagesRef} className="messages">
            {messages.map((message) => (
              <div className="message">
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
              className="form-control"
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
