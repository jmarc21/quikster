import React, {Component} from 'react';
import './shop.css'

export default class Shop extends Component{
    //should be able to add a shopping list and then take the items in that shopping list and find the items in the store.
    constructor(){
        super();
        this.state = {
            ShoppingList: []
        }
    }
    
    render(){
        return(
            <div className='shop'>
                <h1 className='title'>Shop</h1>
                <div onClick={() => this.addList()}>Add A List</div>
            </div>
        )
    }
}