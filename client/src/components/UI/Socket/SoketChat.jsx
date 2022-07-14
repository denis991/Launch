// import React, { useEffect, useReducer } from 'react';
// import axios from 'axios';
// import chatCSS from './SoketChat.module.css';

// import socket from './socket';
// import reducer from './reducer';
// // import JoinBlock from './components/JoinBlock';
// import Chat from './components/Chat';

// function SoketChat({ userPage, sessionUser }) {
//   /* TODO
//    *userPage = { id: 1, name: 'Иванов Иван Иванович' };
//    *
//    * sessionUser кто заходжений в систему
//    */

//   const [state, dispatch] = useReducer(reducer, {
//     joined: false,
//     roomId: null,
//     userName: null,
//     users: [],
//     messages: [],
//   });

//   const onLogin = async (obj) => {
//     dispatch({
//       type: 'JOINED',
//       payload: obj,
//     });
//     socket.emit('ROOM:JOIN', obj);
//     const { data } = await axios.get(`${process.env.REACT_APP_SOKIT_HTTP}/rooms/${obj.roomId}`);
//     dispatch({
//       type: 'SET_DATA',
//       payload: data,
//     });
//   };

//   const setUsers = (users) => {
//     dispatch({
//       type: 'SET_USERS',
//       payload: users,
//     });
//   };

//   const addMessage = (message) => {
//     dispatch({
//       type: 'NEW_MESSAGE',
//       payload: message,
//     });
//   };

//   useEffect(() => {
//     socket.on('ROOM:SET_USERS', setUsers);
//     socket.on('ROOM:NEW_MESSAGE', addMessage);
//   }, []);

//   window.socket = socket;

//   return (
//     <div className={chatCSS.wrapper}>

//       {!state.joined ? (
//         <JoinBlock onLogin={onLogin} />
//       ) : (
//         <Chat {...state} onAddMessage={addMessage} />
//       )}

//     </div>
//   );
// }

// export default SoketChat;
