enum Methods {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

const API_ROUTES = {
  logIn: {
    url: () => '/auth/local/sign-in',
    method: Methods.POST,
  },
  signUp: {
    url: () => '/auth/local/sign-up',
    method: Methods.POST,
  },
  logOut: {
    url: () => '/auth/local/log-out',
    method: Methods.POST,
  },
  me: {
    url: () => '/me',
    method: Methods.GET,
  },

  createWorkspace: {
    url: () => '/workspace',
    method: Methods.POST,
  },
  getAllWorkspace: {
    url: () => '/workspaces',
    method: Methods.GET,
  },
  getWorkspace: {
    url: (workspaceId: string) => `/workspace/${workspaceId}`,
    method: Methods.GET,
  },
  changeCurrentWorkspace: {
    url: (workspaceId: string) => `/user/workspace/${workspaceId}`,
    method: Methods.POST,
  },
};

export { API_ROUTES };
