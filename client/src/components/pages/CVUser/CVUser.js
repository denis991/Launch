import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card, CardBody, CardText, CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { getCVThunk } from '../../../redux/actions/cvsActions';
import CvUserComment from './CVUserComment';
import { getCVCommentThunk } from '../../../redux/actions/cvCommentsAction';

function CvUser() {
  const dispatch = useDispatch();
  const parseUrl = window.location.href.split('/');
  const id = parseUrl[parseUrl.length - 1];

  const cv = useSelector((state) => state.cvs[0]);
  const comments = useSelector((state) => state.cvComments);

  useEffect(() => {
    dispatch(getCVThunk(id));
  }, []);

  useEffect(() => {
    dispatch(getCVCommentThunk(id));
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
        <p>
          tel:
          {' '}
          {cv?.cvUser?.contact}
        </p>
        <p><a href={`${cv?.cvUser?.github}`}>github</a></p>
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

      <div className="mt-2">
        <CvUserComment cvid={cv?.cvUser?.id} />
      </div>

      <div className="w-75 mx-auto">
        <div className="d-flex justify-content-center">
          <h5>Комментарии</h5>
        </div>
        {comments?.map((comment) => (
          <Card
            color="light"
            key={comment.id}
            className="mt-2"
          >
            <CardBody>
              <CardTitle tag="h6">
                <Link to={`/users/${comment.user_id}`}>
                  {comment.User.name}
                </Link>
              </CardTitle>
              <CardText>
                {comment.body}
              </CardText>
              <CardText>
                <small className="text-muted d-flex justify-content-end">
                  Дата публикации:
                  {' '}
                  {comment?.createdAt.split('T')[0]}
                </small>
              </CardText>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CvUser;
