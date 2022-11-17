import {
  action,
  makeAutoObservable,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';
import { API_ROUTES } from '../../const';
import http from '../../http';
import HTTPRequest from '../api';

class Workspace {
  workspace: any;
  constructor(workspace: any) {
    makeAutoObservable(this);
    this.workspace = workspace;
  }
  getKey(prefix: string | undefined = 'workspace') {
    return prefix + '-' + this.workspace.uuid;
  }
  async changeCurrentWorkspace() {
    try {
      const data = await http.post(`/user/workspace/${this.workspace.uuid}`);
    } catch (err) {}
  }
}

class Workspaces extends HTTPRequest {
  workspaces: Workspace[] = [];
  currentWorkspaceId: string = '';

  constructor() {
    super();
    makeObservable(this, {
      workspaces: observable,
      createWorkspace: action,
      getAllWorkspaces: action,
    });
    this.getAllWorkspaces();
  }

  async createWorkspace(name: string) {
    const res = await this.request({
      url: API_ROUTES.createWorkspace.url(),
      method: API_ROUTES.createWorkspace.method,
      data: {
        name,
      },
    });
    if (res?.data) {
      runInAction(() => {
        const { workspace } = res.data;
        const ws = new Workspace(workspace);
        this.workspaces.push(ws);
      });
    }
  }

  async getAllWorkspaces() {
    const res = await this.request({
      url: API_ROUTES.getAllWorkspace.url(),
      method: API_ROUTES.getAllWorkspace.method,
    });

    if (res?.data) {
      const { workspaces } = res.data;
      runInAction(() => {
        const w = workspaces.map((item: any) => new Workspace(item));
        this.workspaces = w;
      });
    }
  }
}

const workspaces = new Workspaces();

export { Workspace, Workspaces };

export default workspaces;
