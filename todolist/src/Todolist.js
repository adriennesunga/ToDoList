import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItems from './TodoItems';
import './Todolist.css';


class Todolist extends Component {
    constructor(props){
        super(props);

        this.state={
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        
    }
    addItem(e){
        if (this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) =>{
                return{
                    items: prevState.items.concat(newItem)
                };
            });
        }
        this._inputElement.value = "";
        //once something has been submitted , it clears

        console.log(this.state.items);

        e.preventDefault();
        // dont have everything reload
    }

    deleteItem(key){
        var filteredItems = this.state.items.filter(function(item){
            return(item.key !== key)
        });

        this.setState({
            items: filteredItems
        });
    }
    render() {
        return (
            <div className="todolistMain">
                <div className="header">
                <h1> To-Do List</h1>
                    <form onSubmit={this.addItem}>
                        <input ref={(a)=>this._inputElement = a}
                               placeholder="enter task">
                        </input>
                        <button type="submit"> add </button>
                    </form>
                </div>
                <TodoItems entries = {this.state.items}
                           delete={this.deleteItem}/>
            </div>
        );
    }
}

Todolist.propTypes = {

};

export default Todolist;