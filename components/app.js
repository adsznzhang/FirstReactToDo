import React,{Component} from 'react'
import TodoInput from './TodoInput' 
import TodoList from './TodoList'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/action.js'
import UserInfo from './UserInfo.js'

class App extends Component{
    render(){
	      return (
                <div className="app">
                <h1>Todo List</h1>
                <UserInfo actions={this.props.actions} createNewUserId={this.props.actions.createNewUserId} user={this.props.user}/>
                <TodoInput addTodo={this.props.actions.addTodo} />
                <TodoList todos={this.props.todos} actions={this.props.actions}/>
                </div>
)
    }

}

function mapStateToProps(state){
    return state
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
