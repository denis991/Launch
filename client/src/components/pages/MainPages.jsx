import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cvs from './Cvs';
import SignIn from './Forms/SignIn/SignIn';
import SignUp from './Forms/SignUp/SignUp';

function MainPages() {
  return (
    <Routes>
      <Route path="/" element={<Cvs />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/users" element={<p>users</p>} />
      <Route path="/users/:id" element={<p>users/:id</p>} />
      <Route path="/resumes" element={<p>resumes</p>} />
      <Route path="/resumes/:id" element={<p>resumes/:id</p>} />
      <Route path="/account/resumes/new" element={<p>account/resumes/new</p>} />
      <Route path="/account/vacancies/new" element={<p>account/vacancies/new</p>} />
      <Route path="/account/resumes" element={<p>account/resumes</p>} />
      <Route path="/account/vacancies" element={<p>account/vacancies</p>} />
      <Route path="/account/resumes/:id" element={<p>account/resumes/:id</p>} />
      <Route path="/account/vacancies/:id" element={<p>account/vacancies/:id</p>} />
      <Route path="/account/profile/edit" element={<p>account/profile/edit</p>} />
      <Route path="/*" element={<p>ERROR</p>} />

    </Routes>
  );
}

export default MainPages;
