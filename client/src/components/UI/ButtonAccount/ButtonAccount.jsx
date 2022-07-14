import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import axios from 'axios';
// import { getVacanciesThunk } from '../../../redux/actions/vacancyActions';
import AnswersUser from '../AnswersUser/AnswersUser';
import CvsUser from '../CvsUser/CvsUser';
import ResumeUser from '../ResumeUser/ResumeUser';

import socket from '../Socket/socket';
import { JOINED, SET_DATA, SET_USERS } from '../../../redux/types/chatTypes';
import { addMessage } from '../../../redux/actions/chatActions';
import CommentsUser from '../СommentsUser/СommentsUser';

function ButtonAccount({ userPage, roomId }) {
  const sessionUser = useSelector((state) => state.user);
  const [comp, setComp] = useState(1);
  const [userName, setUserName] = useState(sessionUser.name);
  console.log(sessionUser, userName);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  const onLogin = async (obj) => {
    dispatch({
      type: JOINED,
      payload: obj,
    });
    socket.emit('ROOM:JOIN', obj);
    const { data } = await axios.get(`${process.env.REACT_APP_SOKIT_HTTP}/rooms/${obj.roomId}`);
    console.log(obj.roomId, '-----------------------------------------------------');
    dispatch({
      type: SET_DATA,
      payload: data,
    });
  };

  const setUsers = (users) => {
    dispatch({
      type: SET_USERS,
      payload: users,
    });
  };

  useEffect(() => {
    socket.on('ROOM:SET_USERS', setUsers);
    socket.on('ROOM:NEW_MESSAGE', (data) => {
      console.log(data, 'ROOM:NEW_MESSAGE');
      dispatch(addMessage(data));
    });
  }, [socket]);

  window.socket = socket;
  // TODO-==========================================================
  const onEnter = async () => {
    if (!roomId || !userName) {
      alert('Неверные данные');
    }
    const obj = {
      roomId,
      userName,
    };
    setLoading(true);
    await axios.post(`${process.env.REACT_APP_SOKIT_HTTP}/rooms`, obj);
    onLogin(obj);
  };
  return (
    <div>
      <ul className="nav nav-pills justify-content-center" role="navigation">
        <li className="nav-item">
          <a
            className="nav-link px-3 active"
            data-bs-toggle="tab"
            href="#resume"
            onClick={() => setComp(1)}
          >
            Резюме

          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link px-3"
            data-bs-toggle="tab"
            href="#answers"
            onClick={() => setComp(2)}
          >
            Вакансии
            {' '}

          </a>
        </li>
        <li className="nav-itemЗ">
          <a
            className="nav-link px-3"
            data-bs-toggle="tab"
            href="#comments"
            onClick={() => setComp(3)}
          >
            Комментарии

          </a>
        </li>
        <li className="nav-itemЗ">
          <a
            className="nav-link px-3"
            data-bs-toggle="tab"
            href="#comments"
            onClick={() => setComp(4)}
          >
            Ответы

          </a>
        </li>

        <Button color="success" outline disabled={isLoading} onClick={onEnter}>
          <Link
            data-bs-toggle="tab"
            to="/chat"
          >
            {isLoading ? 'Вход...' : 'Войти в чат'}
          </Link>
        </Button>

      </ul>
      <div>
        {(comp === 1)
        && (
          <ResumeUser userPage={userPage} />
        )}
        {(comp === 2)
        && (
          <CvsUser userPage={userPage} />
        )}
        {(comp === 3)
        && (
          <CommentsUser userPage={userPage} />
        )}
        {(comp === 4)
        && (
          <AnswersUser userPage={userPage} />
        )}
      </div>
    </div>
  );
}

export default ButtonAccount;
