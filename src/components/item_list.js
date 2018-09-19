import React, { Component } from 'react';
import Item from './item';

//Props will be the function onTabChange, graphic, soundCategory and textCategory categories
class ItemList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //Will consist of the four list items that hold the media
            pictures:[],
            texts: [],
            sounds: [],
        };

        this.updatePictures = this.updatePictures.bind(this);
        this.updateTexts = this.updateTexts.bind(this);
        this.updateSounds = this.updateSounds.bind(this);

    }

    //Fetch data on init
    componentWillMount() {
        this.updatePictures();
        this.updateTexts();
        this.updateSounds();
    }

    //Fetch data on props update
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

    updatePictures(){
        console.log(this.props.pictureCategory);
        let pictures = [];
        for(let x = 0 ; x < 1; x++ ){
            let url = "img/"+ this.props.pictureCategory + "/"+ x + ".svg";
            fetch(url)
                .then(response => response.text())
                .then(p => pictures.push(p));
        }
        this.setState({pictures: pictures});
    }

    updateTexts(){
        let texts = [];
        for(let x = 0; x < 1; x++){
            let url = "text.json";
            fetch(url)
                .then(response => response.json())
                .then(json => json.city._0)
        }
        this.setState({texts: texts});
    }

    updateSounds(){

    }


    // Css for showing selected item



    //Map contentList to view as content tabs over content
    renderListItems() {
        let temp = [];
        for(let i = 0; i < 4 ; i++) {
            temp.push(<Item
                onTabClicked={this.props.onTabChange}
                picture={this.state.pictures[i]}
                text={this.state.texts[i]}
                sound={this.state.sounds[i]}
                key={i}/>)
        }
        return temp;
    };

    render() {
        console.log(this.renderListItems());
        return (
            <div className={"item_list"}>
                {this.renderListItems()}
            </div>
        )
    }
}

export default ItemList;