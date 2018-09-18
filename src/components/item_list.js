import React, { Component } from 'react';
import Item from './item';

//Props will be the function onTabChange, graphic, sound and text categories
class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Will consist of the four list items that hold the media
            contentList: [{picture:"",text:"1",sound:""},{picture:"",text:"2",sound:""},{picture:"",text:"3",sound:""},{picture:"",text:"4",sound:""}],
            selected: null
        };

    }


    //will create the listitem objects by doing ajax requests based on categories
    fun (){

    }

    selectItem(event) {
        if (this.state.selected !== null){
            this.state.selected.style.background = "white";
        }
        this.setState({selected: event.target});
        event.target.style.background = "#ebebeb";
    };


    //Map contentList to view as content tabs over content
    renderListItems() {
        return this.state.contentList.map(item => {
            return <Item selectItem={this.selectItem.bind(this)} picture={item.picture} text={item.text} sound={item.sound} key={item.text}/>
        });
    };

    render() {

        return (
            <div className={"item_list"}>
                {this.renderListItems()}
            </div>
        )
    }
}

export default ItemList;