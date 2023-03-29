import logo from './logo.svg';
import './App.css';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
       <LoginButton/>
       <LogoutButton/>
       <Profile/>
    </div>
  );
}

export default App;
