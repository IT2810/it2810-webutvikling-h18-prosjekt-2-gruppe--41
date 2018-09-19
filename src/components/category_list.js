import React,{Component} from "react";


class CategoryList extends Component {

    render(){

        return(
        <div className={"categories"}>
            Picture
            <form>
                <div>
                    <input type={"radio"} name={"pictureCategory"} value={"green"} defaultChecked onChange={() => {this.props.onCategoryChange("pictureCategory","green")}}/> Green
                </div>
                <div>
                    <input type={"radio"} name={"pictureCategory"} value={"red"} onChange={() => {this.props.onCategoryChange("pictureCategory","red")}}/> Red
                </div>
                <div>
                    <input type={"radio"} name={"pictureCategory"} value={"blue"} onChange={() => {this.props.onCategoryChange("pictureCategory","blue")}}/> Blue
                </div>
            </form>
            <br/>
            Text
            <form>
                <div>
                    <input type={"radio"} name={"textCategory"} defaultChecked value={"animal"} onChange={() => {this.props.onCategoryChange("textCategory","animal")}}/> Animal
                </div>
                <div>
                    <input type={"radio"} name={"textCategory"} value={"people"}onChange={() => {this.props.onCategoryChange("textCategory","people")}}/>People
                </div>
                <div>
                    <input type={"radio"} name={"textCategory"} value={"city"} onChange={() => {this.props.onCategoryChange("textCategory","city")}}/> Cities
                </div>
            </form>
            <br/>
            Category 3
            <form>
                <div>
                    <input type={"radio"} name={"gender"} value={"male"}/> Male
                </div>
                <div>
                    <input type={"radio"} name={"gender"} value={"female"}/> Female
                </div>
                <div>
                    <input type={"radio"} name={"gender"} value={"other"}/> Other
                </div>
            </form>
        </div>
        );
    }

}

export default CategoryList;