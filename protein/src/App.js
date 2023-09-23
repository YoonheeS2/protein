import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import StateComponent from './components/StateComponent';
import InputComponent from './components/InputComponent';

function App() {
  return (
    <div className="App">
        <Welcome username={"김윤희"} age={23} height={172} ></Welcome>
        <StateComponent></StateComponent>
        <InputComponent></InputComponent>
    </div>
  );
};

export default App;
