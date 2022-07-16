import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { deleteCVThunk } from '../../../redux/actions/cvsActions';

function ButDelCV({ id }) {
  const dispatch = useDispatch();
  const clickHandler = () => {
    // console.log(id);
    dispatch(deleteCVThunk(id));
  };
  // dispatch({type: DELETE, payload: el.joke})}
  return (
    <Button color="danger" outline onClick={() => clickHandler()}>
      Удалить
    </Button>
  );
}

export default ButDelCV;
