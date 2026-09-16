import './App.css';
import InputSettings from './InputSettings'

// main function
function App() {
  return (
    <div className="App">
      <div className='groupInput'>
        <h3>Settings:</h3>
        <InputSettings/>
        <h3>Parties:</h3>
      </div>
      <div id='diagramDiv'></div>
    </div>
  );
}

export default App;
