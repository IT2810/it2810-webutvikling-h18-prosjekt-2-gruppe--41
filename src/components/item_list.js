import React, { Component } from 'react';
import Item from './item';
import axios from "axios/index";

//Props will be the function onTabChange, graphic, soundCategory and textCategory categories
class ItemList extends Component {

    constructor(props){
        super(props);

        this.state = {
            pictures: ["","","",""],
            sounds: ["","","",""],
            texts: ["","","",""]
        };

        this.updatePictures = this.updatePictures.bind(this);
        this.updateTexts = this.updateTexts.bind(this);
        this.updateSounds = this.updateSounds.bind(this);
    }

    //Fetch data on init
    componentWillMount() {
        console.log("willmount");
        this.updatePictures();
        this.updateTexts();
        this.updateSounds();
    }

    // Fetch data on props changed
    componentDidUpdate(prevProps) {
        if (prevProps.pictureCategory !== this.props.pictureCategory) {
            this.updatePictures();
        }
        else if (prevProps.textCategory !== this.props.textCategory) {
            this.updateTexts();
        }
        else if (prevProps.soundCategory !== this.props.soundCategory) {
            this.updateSounds();
        }
    }

    //Fetch the pictures for the current category, and update state gradually
    updatePictures(){
        let indexes = [0, 1, 2, 3];
        for(let x = 0 ; x < 4; x++ ){
            let url = "img/"+ this.props.pictureCategory + "/"+ x + ".svg";
            axios.get(url)
                .then(response => {
                    var randomIndex = Math.floor(Math.random() * (4 - x));
                    const newPictures = this.state.pictures;
                    newPictures[indexes[randomIndex]] = response.data;
                    this.setState({pictures: newPictures});
                    indexes.splice(randomIndex, 1);
                });
        }
    }

    //Fetch the texts for the current text category, and update state gradually
    updateTexts(){
        let indexes = [0, 1, 2, 3];
        for(let x = 0 ; x < 4; x++ ){
            let url = "text.json";
            axios.get(url)
                .then(response => {
                    var randomIndex = Math.floor(Math.random() * (4 - x));
                    const newTexts = this.state.texts;
                    newTexts[x] = response.data[this.props.textCategory][indexes[randomIndex]];
                    this.setState({texts: newTexts});
                    indexes.splice(randomIndex, 1);
                });
        }
    }

    //fetch all the mp3 files
    updateSounds(){
        this.setState({sounds:[
                "sounds/" + this.props.soundCategory + "/0.mp3",
                "sounds/" + this.props.soundCategory + "/1.mp3",
                "sounds/" + this.props.soundCategory + "/2.mp3",
                "sounds/" + this.props.soundCategory + "/3.mp3"]})
    }

    //Map contentList to view as content tabs over content
    renderListItems() {
        let temp = [];
        for(let i = 0; i < 4 ; i++) {
            let id ="ART PIECE "+(i+1)
            temp.push(<Item
                onTabClicked={this.props.onTabChange}
                picture={this.state.pictures[i]}
                text={this.state.texts[i]}
                sound={this.state.sounds[i]}
                key={i}
                id={id}/>)
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
