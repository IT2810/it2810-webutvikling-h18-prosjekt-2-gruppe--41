import React, { Component } from 'react';
import ItemList from "./item_list";
import CategoryList from "./category_list";

class PageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentListItem: "",
            //will be the chosen category for the media.
            pictureCategory: "green",
            textCategory: "",
            soundCategory: "",
        };

        this.onTabChange = this.onTabChange.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
    }

    onTabChange(listItem){
        this.setState({
            currentListItem: listItem
            }
        )
    }


    //Make sure that when a category is changed, we need to render again
    onCategoryChange(name, value){
        //name would for example be pictureCategory and value could be blue
        console.log("CategoryChanged",name,value);
        if(name === "pictureCategory"){
            this.setState({pictureCategory: value});
        }
        else if(name === "text"){
            this.setState({textCategory: value});
        }
        else if(name === "soundCategory"){
            this.setState({soundCategory: value});
        }

    }


    render() {
        console.log("Render PageContainer");
        console.log("current",this.state.currentListItem.picture);
        return(
            <div className="page_container">
                <h1 className={"header"}>SHOWROOM</h1>
                <ItemList onTabChange={this.onTabChange} picture={this.state.pictureCategory} text={this.state.textCategory} sound={this.state.soundCategory} />

                <div className={"showroom"}>
                    <div dangerouslySetInnerHTML={{__html: this.state.currentListItem.picture}} />
                    <div>
                        <p>some text that is loaded</p>
                        <button>MEDIA BUTTON</button>
                    </div>
                    <CategoryList onCategoryChange={this.onCategoryChange}/>
                </div>



            </div>
        )
    }
}

export default PageContainer;

