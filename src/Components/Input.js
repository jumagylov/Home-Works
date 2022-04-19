import {useState} from 'react'
import Date from './Date'
import './Data.css'
function Input(props) {
    const[text, setvalue] = useState('')
    const[result, setResult] = useState([])
    
      function onHand(event){
          setvalue(event.target.value)
      }
      
      function submitHandler() {
        if(text.trim() === ''){
          return
        }
        setResult([...result, {text: text}]);
        setvalue('')
      }
    return (
      <div className='div'>
        <div>
            <input className='input' value={text} onChange={onHand} type="text" />
            <button className='but' onClick={submitHandler}>Click</button>
        
             <div className='cont-result'>
            {result.map((e, i)=>{
                    return <div className='cont-done' key={i}>  <Date date={props.date}/> {e.text}   </div>
                        
                    
                })}
        
            </div>
        </div>
        </div>
    )
}
export default Input
