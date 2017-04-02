import React, {Component} from 'react'

class TodoInput extends Component {

    constructor(props){
        super(props);
        this.state = {inputText: ''};
    }

    // deleteLetter(){
        
    //     this.setState({
    //         inputText: this.state.inputText.substring(0, this.state.inputText.length -1)
    //     })
    // }

    handleChange(e){
        this.setState({
            inputText: e.target.value
        })
    }


    handleSubmit(event){
        event.preventDefault();
        this.props.addTodo(this.state.inputText)
        this.state.inputText = '';
    }
    
    render(){
        return (
                <div>
                <form onSubmit={this.handleSubmit.bind(this)}> 
                <input
                type="text"
                placeholder="Type in your todo"
                value={this.state.inputText}
                onChange={this.handleChange.bind(this)}
                />
                <input type="submit" text="Submit"/>
                </form>
                </div>
               )
    }
}

export default TodoInput
