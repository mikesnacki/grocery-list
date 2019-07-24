import React, { Component } from 'react'

class Item extends Component {
    constructor(props) {
        super(props)

        this.onClickChecked = this.onClickChecked.bind(this)
        this.onClickRemove = this.onClickRemove.bind(this)
    }

    onClickChecked() {
        this.props.inCart(id)
    }

    onClickRemove() {
        this.props.removeItem(id)
    }

    render() {
        return (
            <div className="row">
                <li><input type="checkbox" name="" id="" /></li>
                <li><p>item</p></li>
                <li><input type="checkbox" name="" id="" /></li>
            </div>
        )
    }

}

export default class Items extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="grocery-list">
                <h2>Grocery List</h2>
                {this.props.items.map((item, index) => {
                    <Item
                        item={item}
                        key={index}
                    />
                })}

            </div>
        )
    }






}