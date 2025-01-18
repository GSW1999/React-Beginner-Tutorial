import logo from './logo.svg';
import './App.css';
import {Welcome as Welcome1,WelcomeFuncComp} from './components/WelcomeFuncComp'
import {WelcomeClassComp,WelcomeClassComp1}  from './components/WelcomeClassComp'
function App() {
  return (
    <div className="App">
      <Welcome1/>
      <WelcomeFuncComp/>
      <WelcomeClassComp/>
      <WelcomeClassComp1/>
    </div>
  );
}

export default App;
