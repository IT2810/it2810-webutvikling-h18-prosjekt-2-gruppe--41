import React, { Component } from 'react';
import ItemList from "./item_list";
import CategoryList from "./category_list";

class Page_container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentListItem: "",
            //will be the chosen category for the media.
            graphic: "",
            text: "",
            sound: "",
        };

        this.onTabChange = this.onTabChange.bind(this);
    }

    onTabChange(listItem){
        this.setState({
            currentListItem: listItem
            }
        )
    }


    render() {
        return(
            <div className="page_container">
                <h1 className={"header"}>SHOWROOM</h1>
                <ItemList onTabCange={this.onTabChange} graphic={this.graphic} text={this.text} sound={this.sound} />

                <div className={"showroom"}>
                    <img src={"https://pbs.twimg.com/profile_images/972154872261853184/RnOg6UyU_400x400.jpg"}/>
                    <div>
                        <p>some text that is loaded</p>
                        <button>MEDIA BUTTON</button>
                    </div>
                    <CategoryList/>
                </div>



            </div>
        )
    }
}

export default Page_container;

