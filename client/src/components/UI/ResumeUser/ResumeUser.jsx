import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card, CardBody, CardSubtitle, CardText, CardTitle
} from 'reactstrap';
import { getCVsThunk } from '../../../redux/actions/cvsActions';

function ResumeUser({ userPage }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCVsThunk());
  }, []);
  // const [resUs, setResUs] = useState({ });
  // const userPage = useSelector((state) => state.user); // вырезанный кусок делаем дрилинг
  const getCvs = useSelector((state) => state.cvs[0]);
  // console.log(user, getCvs, 'user<----');

  let cvs = getCvs?.filter(
    (el) => (userPage?.id
      ? el.user_id === userPage.id
      : false)
  );
  if (cvs === undefined) { cvs = []; }
  // console.log(cvs, 'cvs<----');

  return (
    <>
      <h5 className="text-center">ваши резюме</h5>
      <div className="card mb-3 border-0">
        <div className="card-body">
          <div>
            { cvs.length !== 0 ? (
              cvs.map((cv) => (
                <Card key={cv.id} className="cvsLists">
                  <CardBody>
                    <CardTitle tag="h5">
                      <Link to={`${cv.id}`}>
                        {cv?.title}
                      </Link>
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      {cv?.createdAt.split('T')[0]}
                    </CardSubtitle>
                    <CardText>
                      {cv?.body}
                    </CardText>
                  </CardBody>
                </Card>
              ))
            ) : (
              <div>У вас их нету</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeUser;
