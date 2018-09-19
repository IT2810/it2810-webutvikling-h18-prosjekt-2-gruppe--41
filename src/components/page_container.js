import React, { Component } from 'react';
import ItemList from "./item_list";
import CategoryList from "./category_list";
import axios from 'axios';

class PageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentListItem: "",
            //will be the chosen category for the media.
            pictureCategory: "green",
            textCategory: "animal",
            soundCategory: "",
            pictures: ["","",""],
            sounds: [],
            texts: ["","",""]
        };

        this.onTabChange = this.onTabChange.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
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

    //Fetch data on props update
    /*componentDidUpdate(prevProps) {
        if (prevProps.pictureCategory !== this.state.pictureCategory) {
            this.updatePictures();
        }
        else if (prevProps.textCategory !== this.state.textCategory) {
            this.updateTexts();
        }
        else if (prevProps.soundCategory !== this.state.soundCategory) {
            this.updateSounds();
        }
    }*/

    onTabChange(listItem){
        this.setState({
            currentListItem: listItem
            }
        )
    }

    updatePictures(){
        for(let x = 0 ; x < 3; x++ ){
            let url = "img/"+ this.state.pictureCategory + "/"+ x + ".svg";
            axios.get(url)
                .then(response => {
                    const newPictures = this.state.pictures;
                    newPictures[x] = response.data;
                    this.setState({pictures: newPictures});
                });
        }
    }

    updateTexts(){
        for(let x = 0 ; x < 3; x++ ){
            let url = `text/${this.state.textCategory}/${x}.txt`;
            axios.get(url)
                .then(response => {
                    const newTexts = this.state.texts;
                    newTexts[x] = response.data;
                    this.setState({texts: newTexts});
                });
        }
    }

    updateSounds(){

    }


    //Make sure that when a category is changed, we need to render again
    onCategoryChange(name, value){
        //name would for example be pictureCategory and value could be blue
        if(name === "pictureCategory"){
            this.setState({pictureCategory: value})
        }
        else if(name === "textCategory"){
            this.setState({textCategory: value});
        }
        else if(name === "soundCategory"){
            this.setState({soundCategory: value});
        }
        console.log(this.state.pictureCategory);
        this.updatePictures();
    }


    render() {
        console.log(this.state.pictures);
        return(
            <div className="page_container">
                <h1 className={"header"}>SHOWROOM</h1>
                <ItemList onTabChange={this.onTabChange} pictures={this.state.pictures} texts={this.state.texts} sounds={this.state.sounds} />

                <div className={"showroom"}>
                    <div dangerouslySetInnerHTML={{__html: this.state.currentListItem.picture}} />
                    <div>
                        <p>{this.state.currentListItem.text}</p>
                        <button>MEDIA BUTTON</button>
                    </div>
                    <CategoryList onCategoryChange={this.onCategoryChange}/>
                </div>
            </div>
        )
    }
}

export default PageContainer;

