import React, { Component } from 'react';
import Item from './item';

//Props will be the function onTabChange, graphic, sound and text categories
class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Will consist of the four list items that hold the media
            contentList: [{picture:"",text:"",sound:""},{picture:"",text:"",sound:""},{picture:"",text:"",sound:""}],
        }
    }


    //will create the listitem objects by doing ajax requests based on categories
    fun (){

    }


    //Map contentList to view as content tabs over content
    renderListItems() {
        return this.state.contentList.map(item => {
            return <Item picture={item.picture} text={item.text} sound={item.sound} key={item.text}/>
        });
    };

    render() {

        return (
            <div className={"list-component"}>
                {this.renderListItems()}
            </div>
        )
    }
}

export default ItemList;