import React, { Component } from 'react'

export default class Tasks extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            tasks: [] 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    } 

    handleSubmit(event) {
        console.log(this.state.tasks)
        event.preventDefault()
        this.setState({
            tasks: this.state.tasks.concat([this.state.input]),
            input: ''
        })

        console.log(this.state.tasks)
    }

    handleDelete(index) {
            let newArr = [...this.state.tasks];
            newArr.splice(index, 1);
            this.setState({tasks: newArr})
        
    }
    
    render() {
        return (
            <div className='wrapper'>
                <div className='card frame'>
                    <TodoList tasks={this.state.tasks} onDelete={this.handleDelete}/>
                    <EnterTask onSubmit={this.handleSubmit} stateProp={this.state.input} onChange={this.handleChange}/>
                </div>
            </div>

        )
    }
}

const TodoList = (props) => {
        const todos = props.tasks.map((task, index) => 
            {
               return (
                   <Todo content={task} key={index} id={index} onDelete={props.onDelete}/>
               )
            }
        )

        return (
            <div className='list-wrapper'>
                {todos}
            </div>
        )
}


const Todo = (props) => {
    return (
    <div className='list-item'>
        {props.content}
        <button className='delete is-pulled-right' onClick={() => {props.onDelete(props.id)}}></button>
    </div>
    )
}

const EnterTask = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <input className='input' value={props.stateProp} placeholder='Enter New Task' onChange={props.onChange}></input>
            <button type='submit' onClick={props.onSubmit}>Add</button>
        </form>
    )
}