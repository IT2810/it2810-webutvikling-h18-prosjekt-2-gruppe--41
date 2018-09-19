import React, { Component } from 'react';
import Item from './item';

//Props will be the function onTabChange, graphic, soundCategory and textCategory categories
class ItemList extends Component {



    //Map contentList to view as content tabs over content
    renderListItems() {
        let temp = [];
        for(let i = 0; i < 4 ; i++) {
            temp.push(<Item
                onTabClicked={this.props.onTabChange}
                picture={this.props.pictures[i]}
                text={this.props.texts[i]}
                sound={this.props.sounds[i]}
                key={i}/>)
        }
        return temp;
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