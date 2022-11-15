import { makeAutoObservable } from 'mobx';
import http from '../../api/http';

interface AuthUserState {
  user: any;
}

class AuthUser implements AuthUserState {
  user: any;
  constructor() {
    makeAutoObservable(this);
  }

  async getMe() {
    try {
      const data = await http.get('/me');
      const { user } = data.data;
      this.user = user;
    } catch (error) {
      console.log(error);
    }
  }

  async signIn(email: string, password: string) {
    const data = await http.post('/auth/local/sign-in/', { email });
  }

  async logIn(email: string, password: string) {
    try {
      const res = await http.post('/auth/local/sign-in/', { email, password });
      const { user } = res.data;
      this.user = user;
    } catch (err) {
      console.log('errr', err);
    }
  }
}

const authUser = new AuthUser();

export default authUser;
