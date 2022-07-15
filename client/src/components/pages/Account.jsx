import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ButtonAccount from '../UI/ButtonAccount/ButtonAccount';
import {getInfoAccountUserThunk} from '../../redux/actions/accountActions';

function Account({socket}) {
  const [usersAccountId, setUsersAccountId] = useState({});
  // setstateTextProf = (vacancy) => {};
  const [resumeId, setResumeId] = useState([]);
  const [vacancyId, setVacancyId] = useState([]);
  const [commentsId, setCommentsId] = useState([]);
  const userPage = useSelector((state) => state.user);
  // console.log(userPage.id);
  const dispatch = useDispatch();
  const [stateTextProf, setstateTextProf] = useState([]);
  const userAccountInfo = useSelector((state) => state.accountInfoUser);

  useEffect(() => {
    dispatch(getInfoAccountUserThunk());
  }, []);

  return (
    <>
      <div className="px-3 py-4 mb-3 bg-light rounded">
        <h1 className="text-center">
          {userAccountInfo?.name}
          {' '}
          {userAccountInfo?.surname}
        </h1>
        <p className="text-center"/>
        <div className="d-flex justify-content-center mt-4">
          <div className="d-flex flex-column mx-3 text-center">
            <div className="h3 text-black-50">{userAccountInfo?.CVComms.length}</div>
            <div className="text-muted">комментарии</div>
          </div>
        </div>
      </div>

      <ButtonAccount userPage={userPage} socket={socket} roomId={userPage?.id}/>
      {stateTextProf && stateTextProf.map((item) => (
        <div className="px-3 py-4 mb-3 bg-light rounded" key={item.id}>

          <div className="h3 text-black-50">{item.liks}</div>
        </div>
      ))}
    </>
  );
}

export default Account;
