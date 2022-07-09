import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cvs from './Cvs';
import Vacancies from './Vacancies/Vacancies';
import SignIn from './Forms/SignIn/SignIn';
import SignUp from './Forms/SignUp/SignUp';
import AddCV from './Forms/AddCV/AddCV';
import AddVacancy from './Forms/AddVacancy/AddVacancy';

function MainPages() {
  return (
    <Routes>
      <Route path="/" element={<Vacancies />} />
      <Route path="/cvs" element={<Cvs />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/users" element={<p>users</p>} />
      <Route path="/users/:id" element={<p>users/:id</p>} />
      <Route path="/cvs" element={<p>resumes</p>} />
      <Route path="/cvs/:id" element={<p>resumes/:id</p>} />
      <Route path="/account" element={<p>account/vacancies/new</p>} />
      <Route path="/account/vacancies/new" element={<AddVacancy />} />
      <Route path="/account/cvs" element={<p>account/resumes</p>} />
      <Route path="/account/vacancies" element={<p>account/vacancies</p>} />
      <Route path="/account/cvs/:id" element={<p>account/resumes/:id</p>} />
      <Route path="/account/vacancies/:id" element={<p>account/vacancies/:id</p>} />
      <Route path="/account/profile/edit" element={<p>account/profile/edit</p>} />
      <Route path="/account/cvs/new" element={<AddCV />} />
      <Route path="/*" element={<p>ERROR</p>} />

    </Routes>
  );
}

export default MainPages;
