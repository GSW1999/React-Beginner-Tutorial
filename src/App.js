// import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import ClassEvent from './components/ClassEvent';
import Counter from './components/Counter';
import EmployeeList from './components/EmployeeList';
import FuncEvent from './components/FuncEvent';
import Message from './components/Message';
// import {Welcome as Welcome1,WelcomeFuncComp} from './components/WelcomeFuncComp'
// import {WelcomeClassComp,WelcomeClassComp1}  from './components/WelcomeClassComp'
// import HelloJSX from './components/HelloJSX'
import Navbar from './components/Navbar';
import ParentComp from './components/ParentComp';
import TextForm from './components/TextForm';
import UserLogin from './components/UserLogin';
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
      {/* <Navbar title="Navbar" link1="Home" link2="About Us"/>
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
      </Card> */}

      {/* <Message/>  
      <Counter/>
      <div className="container my-3">
      <TextForm title="Lower to Upper Case Convertor"/>
      </div> */}
      
      {/* <FuncEvent/>
      <ClassEvent/> */}
{/* <ParentComp/> */}
{/* <UserLogin/> */}
<EmployeeList/>
    </div>
  );
}

export default App;
