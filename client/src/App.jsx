import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import './App.css';
import MainPages from './components/pages/MainPages';
import { userCheckAuthThunk } from './redux/actions/AuthAction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCheckAuthThunk());
  }, []);
  return (
    <div className="App">
      <MainPages />
    </div>
  );
}

export default App;
