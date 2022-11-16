import { observer } from 'mobx-react-lite';
import { ReactNode, useEffect } from 'react';
import authUser from '../../store/user';

interface AuthLayoutsProps {
  children: ReactNode;
}

const AuthLayouts = observer(({ children }: AuthLayoutsProps) => {
  useEffect(() => {}, [authUser.user]);

  return <div>{children}</div>;
});

export default AuthLayouts;
