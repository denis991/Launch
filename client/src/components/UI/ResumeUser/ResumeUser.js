import React from 'react';
import { useSelector } from 'react-redux';

function ResumeUser() {
  const { user } = useSelector((state) => state);
  return (
    <div>ResumeUser</div>
  );
}

export default ResumeUser;
