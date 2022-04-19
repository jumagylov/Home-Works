import './App.css';
import Input from './Components/Input';
function App() {

       let date = {
         date:new Date()
       }

    
  return (

    <div className="App">
      <Input date={date.date} />
    </div>
  );
}

export default App;
