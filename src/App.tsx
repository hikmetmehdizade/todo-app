import Router from './components/router/Router';
import authUser from './store/user';

authUser.getMe();

function App() {
  return <Router />;
}

export default App;
