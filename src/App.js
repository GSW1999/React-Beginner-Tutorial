// import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
// import {Welcome as Welcome1,WelcomeFuncComp} from './components/WelcomeFuncComp'
// import {WelcomeClassComp,WelcomeClassComp1}  from './components/WelcomeClassComp'
// import HelloJSX from './components/HelloJSX'
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      {/* <Welcome1/>
      <WelcomeFuncComp/>
      <WelcomeClassComp/>
      <WelcomeClassComp1/>
      <HelloJSX/> */}

      {/* Uncomment this to see behavious */}

      {/* <Navbar  link1="Home" link2="About Us"/> */}
      <Navbar title="Navbar" link1="Home" link2="About Us"/>
      <Card>
      <h3>Card 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, obcaecati? Velit optio
                 fugiat ipsa vitae qui perspiciatis laborum soluta harum.</p>
      </Card>
      <Card>
      <h3>Card 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, obcaecati? Velit optio
                 fugiat ipsa vitae qui perspiciatis laborum soluta harum.</p>
      </Card>
      <Card>
      <h3>Card 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, obcaecati? Velit optio
                 fugiat ipsa vitae qui perspiciatis laborum soluta harum.</p>
      </Card>
    </div>
  );
}

export default App;
