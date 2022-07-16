import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { deleteCVThunk } from '../../../redux/actions/cvsActions';

function ButtonDelete({ id }) {
  const dispatch = useDispatch();
  const clickHandler = () => dispatch(deleteCVThunk(id));

  return (
    <div>
      <Button color="danger" outline onClick={() => clickHandler()}>
        Удалить
      </Button>
    </div>
  );
}

export default ButtonDelete;
