import { makeAutoObservable } from 'mobx';
import http from '../../api/http';

class Workspace {
  workspace: any;
  constructor(workspace: any) {
    makeAutoObservable(this);
    this.workspace = workspace;
  }
}

class Workspaces {
  workspaces: Workspace[] = [];
  currentWorkspaceId: string = '';

  async createWorkspace(name: string) {
    try {
      const res = await http.post('/workspace', { name });
      const { workspace } = res.data;

      const ws = new Workspace(workspace);
      this.workspaces.push(ws);
    } catch (err) {
      console.error(err);
    }
  }

  async getAllWorkspaces() {
    try {
      const res = await http.get('workspaces');

      const { workspaces } = res.data;

      workspaces.forEach((item: any) => {
        const w = new Workspace(item);
        this.workspaces.push(w);
      });
    } catch (err) {
      console.log('err', err);
    }
  }
  async changeCurrentWorkspace() {}
}

const workspaces = new Workspaces();

export { Workspace, Workspaces };

export default workspaces;
