import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCVCommentThunk } from '../../../redux/actions/cvCommentsAction';

function CvUserComment({ cvid }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState({});

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({});
    dispatch(addCVCommentThunk({ form, cvid }));
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label text-secondary">Оставьте комментарий</label>
          <textarea name="body" onChange={handleInput} className="form-control" id="exampleFormControlTextarea1" rows="3" />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">Отправить</button>
        </div>
      </form>
    </div>
  );
}

export default CvUserComment;
