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
import CvUser from './CVUser/CVUser';
import VacancyUser from './VacancyUser/VacancyUser';
import Users from './Users/Users';
import News from './News';
import Reloc from '../Relocation/Reloc';
// import Relocation from './Relocation';
import User from './User/User';
import Chat from '../UI/Socket/components/Chat';

function MainPages() {
  return (
    <Routes>
      <Route path="/" element={<Vacancies />} />
      <Route path="/vacancies/:id" element={<VacancyUser />} />
      <Route
        path="/auth"
        element={(
          <AuthRoute>
            <UserForm />
          </AuthRoute>
        )}
      />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<User />} />
      <Route path="/cvs" element={<CVsLists />} />
      <Route path="/cvs/:id" element={<CvUser />} />
      <Route path="/account" element={<Account />} />
      <Route path="/account/vacancies/new" element={<AddVacancy />} />
      <Route path="/account/cvs" element={<p>account/resumes</p>} />
      <Route path="/account/vacancies" element={<p>account/vacancies</p>} />
      <Route path="/account/cvs/:id" element={<p>account/resumes/:id</p>} />
      <Route path="/account/vacancies/:id" element={<p>account/vacancies/:id</p>} />
      <Route path="/account/profile/edit" element={<ProfilEdit />} />
      <Route path="/account/cvs/new" element={<AddCV />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/relocation" element={<Relocation />} />
      <Route path="/relocation" element={<Reloc />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default MainPages;
