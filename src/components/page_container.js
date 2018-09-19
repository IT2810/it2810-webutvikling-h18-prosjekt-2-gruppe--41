import React, { Component } from 'react';
import ItemList from "./item_list";
import CategoryList from "./category_list";

class PageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentListItem: "",
            //will be the chosen category for the media.
            picture: "green",
            text: "",
            sound: "",
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
        //name would for example be picture and value could be blue
        console.log("CategoryChanged",name,value);
        if(name === "picture"){
            this.setState({picture: value});
        }
        else if(name === "text"){
            this.setState({text: value});
        }
        else if(name === "sound"){
            this.setState({sound: value});
        }

    }


    render() {
        console.log("Render PageContainer");
        return(
            <div className="page_container">
                <h1 className={"header"}>SHOWROOM</h1>
                <ItemList onTabCange={this.onTabChange} picture={this.state.picture} text={this.state.text} sound={this.state.sound} />

                <div className={"showroom"}>
                    <img src={"https://pbs.twimg.com/profile_images/972154872261853184/RnOg6UyU_400x400.jpg"}/>
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

