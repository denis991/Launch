import {useNavigate} from 'react-router-dom';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import './App.css';
import MainPages from './components/pages/MainPages';
import {userCheckAuthThunk} from './redux/actions/AuthAction';
import {io} from 'socket.io-client';

const socket = io.connect(`${process.env.REACT_APP_SOKIT_HTTP}/`);

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userCheckAuthThunk(navigate));
  }, []);
  
  return (
    <div className="App">
      <MainPages socket={socket}/>
    </div>
  );
}

export default App;
