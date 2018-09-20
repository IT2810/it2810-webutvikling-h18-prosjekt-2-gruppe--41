import React, { Component } from 'react';
import ItemList from "./item_list";
import CategoryList from "./category_list";

class PageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentListItem: {},
            //will be the chosen category for the media.
            pictureCategory: "green",
            textCategory: "animal",
            soundCategory: "instrument",
        };

        this.onTabChange = this.onTabChange.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
    }



    onTabChange(listItem){
        this.setState({
            currentListItem: listItem
            })
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

    }


    render() {
        return(
            <div className="page_container">
                <h1 className={"header"}>SHOWROOM</h1>
                <CategoryList onCategoryChange={this.onCategoryChange}/>
                <div className={"showroom"}>
                    <ItemList onTabChange={this.onTabChange} pictureCategory={this.state.pictureCategory} textCategory={this.state.textCategory} soundCategory={this.state.soundCategory} />
                    <div dangerouslySetInnerHTML={{__html: this.state.currentListItem.picture}} className="showroom_image"/>
                    <div className="showroom_text_container">
                      <p className="showroom_text">{this.state.currentListItem.text}</p>
                    </div>
                    <div className="showroom_audio_container">
                    <audio className="showroom_audio" src={this.state.currentListItem.sound} controls/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageContainer;
