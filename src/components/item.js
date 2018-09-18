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
            <div className={"item"} onClick={this.props.selectItem}>
               Item
            </div>
        )
    }
}

export default Item;

