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
            Category 2
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