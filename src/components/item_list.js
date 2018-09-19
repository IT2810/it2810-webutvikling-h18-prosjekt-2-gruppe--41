import React, { Component } from 'react';
import Item from './item';

//Props will be the function onTabChange, graphic, sound and text categories
class ItemList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //Will consist of the four list items that hold the media
            pictures:[],
            texts: [],
            sounds: [],
            selected: null
        };

    }

    //Fetch data on init
    componentDidMount() {
        this.updatePictures();
        this.updateTexts();
        this.updateSounds();
    }

    //Fetch data on props update
    componentDidUpdate(prevProps) {
        if (prevProps.picture !== this.props.picture) {
            this.updatePictures();
        }
        else if (prevProps.text !== this.props.text) {
            this.updateTexts();
        }
        else if (prevProps.sound !== this.props.sound) {
            this.updateSounds();
        }

    }

    updatePictures(){
        let pictures = [];
        for(let x = 0 ; x < 1; x++ ){
            let url = "img/"+ this.props.picture + "/"+ x + ".svg";
            fetch(url)
                .then(response => <div dangerouslySetInnerHTML={{__html: response.text()}} />)
                .then(p => pictures.push(p));
        }
        this.setState({pictures: pictures});
    }

    updateTexts(){

    }

    updateSounds(){

    }


    // Css for showing selected item
    selectItem(event) {
        if (this.state.selected !== null){
            this.state.selected.style.background = "white";
        }
        this.setState({selected: event.target});
        event.target.style.background = "#ebebeb";
    };


    //Map contentList to view as content tabs over content
    renderListItems() {
        let temp = [];
        for(let i = 0; i < this.state.pictures.length ; i++) {
            temp.push(<Item
                selectItem={this.selectItem.bind(this)}
                picture={this.state.pictures[i]}
                text={this.state.texts[i]}
                sound={this.state.sounds[i]} key={i}/>)
        }
        return temp;
    };

    render() {
        console.log("SEHER",this.renderListItems());
        return (
            <div className={"item_list"}>
                {this.renderListItems()}
            </div>
        )
    }
}

export default ItemList;