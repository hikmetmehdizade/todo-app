import { observer } from 'mobx-react-lite';
import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';
import http from '../../http';
import authUser from '../../store/user';

interface AuthLayoutsProps {
  children: ReactNode;
}

const AuthLayouts = ({ children }: AuthLayoutsProps) => {
  const nav = useNavigate();
  useEffect(() => {
    http.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error?.response?.status === 401) {
          authUser.logOut();
        }

        return Promise.reject(error);
      }
    );
  }, []);

  useEffect(() => {
    if (!authUser.user) {
      nav('/');
    }
  }, [authUser.user]);

  return <div>{children}</div>;
};

export default observer(AuthLayouts);
