import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button, Card, CardBody, CardSubtitle, CardText, CardTitle
} from 'reactstrap';
import { getVacanciesAllThunk } from '../../../redux/actions/vacancyActions';

function VacanciesList() {
  const dispatch = useDispatch();
  const adVacancies = useSelector((state) => state.vacancy[0]);
  // console.log(adVacancies, '!!!!!');
  useEffect(() => {
    // dispatch(getSkill({}));
    dispatch(getVacanciesAllThunk());
  }, []);
  return (
    <div className="card mb-3 border-0">
      <div className="card-body">
        <div>
          { adVacancies?.map((el) => (
            <Card>
              <CardBody>
                <Link to={`/vacancies/${el.id}`}>

                  <CardTitle tag="h5">
                    {el.title}
                  </CardTitle>
                </Link>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  {`${el.createdAt.split('T')[0]}`}
                </CardSubtitle>
                <CardText>
                  {`
              ${el.duties}
              ${el.requirements}
              ${el.technology}
              `}
                </CardText>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VacanciesList;
// { adVacancies.map((el) => (
//       <div className="vacation">
//         <div>
//           <div>{}</div>
//           <h5>
//             <a href={el.url}>
//               <span className="sp">{el.level}</span>
//               <span className="sp">{el.leng}</span>
//               <span className="sp">{el.salary}</span>
//               <span>
//                 <span>-</span>
//                 {el.company};
