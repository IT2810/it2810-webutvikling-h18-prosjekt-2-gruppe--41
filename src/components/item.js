import React, { Component } from 'react';

class Item extends Component {


    constructor(props) {
        super(props);
        this.state = {
            currentPicture: "",
            currentSound: "",
            currentText: ""
        }
    }

    render() {
        return(
            <div className={"list-item-component"}>
               Item
            </div>
        )
    }
}

export default Item;

