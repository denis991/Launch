import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Card, CardBody, CardSubtitle, CardText, CardTitle
} from 'reactstrap';
import getRelocationThunk from '../../../redux/actions/relocationActions';
import VacanciesForm from '../VacanciesForm/VacanciesForm';

function Relocation({ country, langProg, levelVacancies }) {
  const relocation = useSelector((state) => state.relocation);
  console.log(relocation);
  const dispatch = useDispatch();

  // console.log(relocation);

  useEffect(() => {
    dispatch(getRelocationThunk());
  }, []);

  const memoRelocation = useMemo(() => relocation.filter((el) => {
    if (!langProg || !country) {
      return true;
    }
    if (el.lang === langProg && el.country === country) {
      return true;
    }
    return false;
  }), [country, langProg, levelVacancies]);

  return (

    <div className="card mb-3 border-0">
      <div className="card-body">
        <div>
          {memoRelocation ? memoRelocation.map((el) => (
            <Card key={el.id}>
              <CardBody>
                <a href={el.url}>
                  {el.lang}
                  <CardTitle tag="h5">
                    {el.title}
                  </CardTitle>
                </a>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  {`${el.createdAt.split('T')[0]}`}
                </CardSubtitle>
                <CardText>
                  {`
        ${el.body}
        ${el.country}
        `}
                </CardText>
              </CardBody>
            </Card>
          )) : relocation?.map((el) => (
            <Card key={el.id}>
              <CardBody>
                <a href={el.url}>
                  {el.lang}
                  <CardTitle tag="h5">
                    {el.title}
                  </CardTitle>
                </a>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  {`${el.createdAt.split('T')[0]}`}
                </CardSubtitle>
                <CardText>
                  {`
        ${el.body}
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

export default Relocation;
