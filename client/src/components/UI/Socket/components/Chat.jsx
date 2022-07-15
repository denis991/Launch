import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Chat.module.css';
import {addMessage} from '../../../../redux/actions/chatActions';

function Chat({socket}) {
  const [messageValue, setMessageValue] = React.useState('');
  const messagesRef = React.useRef(null);
  const dispatch = useDispatch();
  const user = useSelector(s => s.user)

  const chat = useSelector((s) => s.chat);

  useEffect(() => {
    socket.emit('user-connected', 'darsen')
  }, [user])

  useEffect(() => {
    socket.on('message', ({name, message}) => {
      dispatch(addMessage({userName: name, text: message}));
    })
  }, [socket])

  const onSendMessage = () => {
    socket.emit('message', {name: user.name, message: messageValue})
    setMessageValue('');
  };

  React.useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  }, [chat]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.chat}>
        <div className={styles.chatmessages}>
          <div ref={messagesRef} className={styles.messages}>
            {chat?.map((message) => (
              <div className={styles.message}>
                <p>{message}</p>
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
