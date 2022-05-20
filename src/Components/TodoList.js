import React from "react"
import './Todo.css'

class TodoList extends React.Component {
    render(){
        return (
            <div>
                <ul>
                    {this.props.items.map((i, e) => (
                    <li className="todo" key={e}>
                        {i}
                        <button className="button" onClick={this.props.deleteTask.bind(this, e)}>Delete</button>
                        </li>
                       ))}
                </ul>
            </div>
        )
    }
}



export default TodoList;