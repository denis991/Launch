import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card, CardBody, CardSubtitle, CardText, CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { getCVsThunk } from '../../../redux/actions/cvsActions';
import './CVsLists.css';

function CVsLists() {
  const dispatch = useDispatch();
  const cvs = useSelector((state) => state.cvs[0]);
  useEffect(() => {
    dispatch(getCVsThunk());
  }, []);

  return (
    <div className="container my-4">
      <div className="col-md-7">
        <div>
          <h2>Резюме программистов</h2>
          {cvs?.map((cv) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default CVsLists;
