import './App.css';
import {Button} from './Component/Count/Button/Button'
import{Count} from './Component/Count/Count'

function App() {
  return (
    <div className="App">
    <Button title='+'/>
    <Count counter='0'/>
    <Button title='-'/>

    </div>
  );
}

export default App;
