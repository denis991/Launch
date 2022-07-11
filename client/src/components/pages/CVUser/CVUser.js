import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCVThunk } from '../../../redux/actions/cvsActions';
import CvUserComment from './CVUserComment';

function CvUser() {
  const dispatch = useDispatch();

  const parseUrl = window.location.href.split('/');
  const id = parseUrl[parseUrl.length - 1];

  const cv = useSelector((state) => state.cvs[0]);

  useEffect(() => {
    dispatch(getCVThunk(id));
  }, []);

  return (
    <div className="container my-4">
      <div>
        <h2>{cv?.cvUser?.title}</h2>
        <hr />
      </div>

      <div>
        <h4>Описание</h4>
        <p>{cv?.cvUser?.body}</p>
      </div>

      <div>
        <h4>Контакты</h4>
        <p>{cv?.cvUser?.contact}</p>
        <a href={`${cv?.cvUser?.github}`}>github</a>
      </div>

      <div>
        <h4>Достижения</h4>
        <p>{cv?.cvUser?.awards}</p>
      </div>

      <div>
        <h4>Образование</h4>
        <p>{cv?.cvUser?.education}</p>
      </div>

      <div>
        <h4>Мой опыт</h4>
        <p>{cv?.cvUser?.experience}</p>
      </div>

      <CvUserComment cvId={cv?.cvUser?.id} />
    </div>
  );
}

export default CvUser;
