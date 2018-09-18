import React, { Component } from 'react';
import ItemList from "./item_list";

class Page_container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentListItem: "",
            //will be the chosen category for the media.
            graphic: "",
            text: "",
            sound: "",
        };

        this.onTabChange = this.onTabChange.bind(this);
    }

    onTabChange(listItem){
        this.setState({
            currentListItem: listItem
            }
        )
    }


    render() {
        return(
            <div className="page-container">
                <div>
                    <ItemList onTabCange={this.onTabChange} graphic={this.graphic} text={this.text} sound={this.sound} />
                </div>
            </div>
        )
    }
}

export default Page_container;

