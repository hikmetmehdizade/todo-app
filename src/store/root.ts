import { AuthUser } from './user';

class RootStore {
  authUserStore: AuthUser = new AuthUser(this);
  constructor() {}
}

export { RootStore };
