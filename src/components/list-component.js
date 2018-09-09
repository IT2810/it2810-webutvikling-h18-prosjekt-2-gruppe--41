import React, { Component } from 'react';
import ListItemComponent from './list-item-component';

//Props will be the function onTabChange, graphic, sound and text categories
class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Will consist of the four list items that hold the media
            contentList: [{bilde:1,text:2,sound:3}],
        }
    }


    //will create the listitem objects by doing ajax requests based on categories
    fun (){

    }



    renderListItems() {
        return this.state.contentList.map(item => {
            <ListItemComponent picture={item.bilde} text={item.text} sound={item.sound}/>
        });
    }

    render() {
        return (
            <div className={"list-component"}>
                {this.renderListItems}
            </div>
        )
    }
}

export default ListComponent;