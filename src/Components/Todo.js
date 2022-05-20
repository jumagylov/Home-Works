import React from 'react';
import TodoList from './TodoList';
import './Todo.css'

class Todo extends React.Component {
   
        constructor(){
            super()
            this.state = {
                value: '',
                items: []
            }
        }

   
        onChangeHandler = (e) => {
            this.setState({
                value: e.target.value
            })
        }

        onDeleteHandler = index => {
            const deleteTask = [...this.state.items]
            deleteTask.splice(index,1)
            this.setState({
                items:deleteTask
            })
          }

        formHandler =(e) => {
            e.preventDefault();
            this.setState({
                value: '',
                items: [...this.state.items, this.state.value]
            })
        }



   render(){
       return(
            <div>
                <div>
              <input type='text' value={this.state.value} 
              placeholder='Введите что нибудь...' 
              onChange={this.onChangeHandler}/> 
              <button className='button' onClick={this.formHandler}> ADD ITEM </button> 
              <TodoList deleteTask={this.onDeleteHandler} items={this.state.items}/>
            </div>
            
            </div>
       )
   }
}

export default Todo;