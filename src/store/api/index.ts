import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { runInAction, action, makeObservable, computed } from 'mobx';
import http from '../../http';

class HTTPRequest {
  private _fetch: AxiosInstance = http;
  private _isLoading: boolean = false;

  public get isLoading() {
    return this._isLoading;
  }

  public set isLoading(load: boolean) {
    if (typeof load === 'boolean') {
      this._isLoading = load;
    } else {
      this._isLoading = false;
    }
  }

  private _error: any;

  public get error() {
    return this._error;
  }

  public set error(err: any) {
    this._isLoading = false;
    this._error = err;
  }

  constructor() {
    makeObservable(this, {
      isLoading: computed,
      error: computed,
      request: action,
    });
  }

  async request(config: AxiosRequestConfig<any>) {
    this._isLoading = true;
    try {
      const res = await this._fetch.request(config);
      this._isLoading = false;
      return res;
    } catch (err) {
      runInAction(() => {
        this.error = err;
      });
    }
  }
}

export default HTTPRequest;
