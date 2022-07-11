/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Vacancies from './Vacancies/Vacancies';
import AddCV from './Forms/AddCV/AddCV';
import Error from './Error/Error';
import AddVacancy from './Forms/AddVacancy/AddVacancy';
import Account from './Account';
import AuthRoute from '../AuthRoute/AuthRoute';
import UserForm from './Forms/UserForm/UserForm';
import ProfilEdit from './ProfilEdit';
import CVsLists from './CVsLists/CVsLists';
import About from './About';

function MainPages() {
  return (
    <Routes>
      <Route path="/" element={<Vacancies />} />
      <Route
        path="/auth"
        element={(
          <AuthRoute>
            <UserForm />
          </AuthRoute>
        )}
      />
      <Route path="/users" element={<p>users</p>} />
      <Route path="/users/:id" element={<p>users/:id</p>} />

      <Route path="/cvs" element={<CVsLists />} />
      <Route path="/cvs/:id" element={<p>resumes/:id</p>} />

      <Route path="/account" element={<Account />} />
      <Route path="/account/vacancies/new" element={<AddVacancy />} />
      <Route path="/account/cvs" element={<p>account/resumes</p>} />
      <Route path="/account/vacancies" element={<p>account/vacancies</p>} />
      <Route path="/account/cvs/:id" element={<p>account/resumes/:id</p>} />
      <Route path="/account/vacancies/:id" element={<p>account/vacancies/:id</p>} />
      <Route path="/account/profile/edit" element={<ProfilEdit />} />
      <Route path="/account/cvs/new" element={<AddCV />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default MainPages;
