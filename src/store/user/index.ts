import {
  action,
  makeObservable,
  observable,
  override,
  runInAction,
} from 'mobx';
import http from '../../http';
import HTTPRequest from '../api';
import { API_ROUTES } from '../../const';

interface AuthUserState {
  user: any;
}

class AuthUser extends HTTPRequest implements AuthUserState {
  user: any = undefined;
  constructor() {
    super();
    makeObservable(this, {
      user: observable,
      getMe: action,
      signUp: action,
      logIn: action,
      logOut: action,
    });
    this.getMe();
  }

  async getMe() {
    const res = await this.request({
      url: API_ROUTES.me.url(),
      method: API_ROUTES.me.method,
    });
    runInAction(() => {
      this.user = res?.data.user;
    });
  }

  async signUp(userInfo: any) {
    const res = await this.request({
      url: API_ROUTES.signUp.url(),
      method: API_ROUTES.signUp.method,
      data: {
        ...userInfo,
      },
    });

    if (res?.data) {
      const { user } = res.data;
      runInAction(() => {
        this.user = user;
      });
    }
  }

  async logIn(email: string, password: string) {
    const res = await this.request({
      url: API_ROUTES.logIn.url(),
      method: API_ROUTES.logIn.method,
      data: {
        email,
        password,
      },
    });
    runInAction(() => {
      this.user = res?.data.user;
    });
  }

  async logOut() {
    const res = await this.request({
      url: API_ROUTES.logOut.url(),
      method: API_ROUTES.logOut.method,
    });
    if (res?.data) {
      runInAction(() => {
        this.user = undefined;
      });
    }
  }
}

const authUser = new AuthUser();

export { AuthUser };
export default authUser;
