import { Navigate } from 'react-router';
import HomePage from '../pages/Home/HomePage';
import NewsAll from '../component/News/NewsAll';
import NewsListPage from '../pages/News/NewsListPage';
import PersonalPage from '../pages/Personal/PersonalPage';
import ProfileNews from '../component/Profile/ProfileNews';
import ProfileInf from '../component/Profile/ProfileInf';
import SignupPage from '../pages/SignPage/SignupPage';
import ForgotPage from '../pages/SignPage/ForgotPage';
import ResetPage from '../pages/SignPage/ResetPage';
import ErrorPage from '../pages/Error/ErrorPage';

export const newsRoute = () => [
  {
    path: '/',
    element: <Navigate to="/news" replace />,
  },
  {
    path: '/news',
    element: <HomePage />,
  },
  {
    path: '/news/ltn',
    element: <NewsListPage />,
    children: [{ path: ':id', element: <NewsAll /> }],
  },
  {
    path: '/news/military',
    element: <NewsListPage />,
    children: [{ path: ':id', element: <NewsAll /> }],
  },
  {
    path: '/news/cna',
    element: <NewsListPage />,
    children: [{ path: ':id', element: <NewsAll /> }],
  },
  {
    path: '/news/udn',
    element: <NewsListPage />,
    children: [{ path: ':id', element: <NewsAll /> }],
  },
  {
    path: '/personal',
    element: <PersonalPage />,
    children: [
      { path: '', element: <ProfileInf /> },
      { path: 'storedNews', element: <ProfileNews /> },
    ],
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/forgetPassword',
    element: <ForgotPage />,
  },
  {
    path: '/resetPassword/:id',
    element: <ResetPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];
