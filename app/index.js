import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import Items from "../components/items"

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            items: [{
                checked: false,
                itemName: "Carrots,",
                deleted: false,
            }]
        }
    }

    render() {
        const { items } = this.state

        return (
            <div>
                <Items
                    items={this.state.items}
                    removeItem={this.removeItem}
                    toggleChecked={this.toggleChecked}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))