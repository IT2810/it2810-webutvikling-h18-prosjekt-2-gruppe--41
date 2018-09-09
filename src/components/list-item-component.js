import React, { Component } from 'react';

class ListItemComponent extends Component {


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
               list item
            </div>
        )
    }
}

export default ListItemComponent;

