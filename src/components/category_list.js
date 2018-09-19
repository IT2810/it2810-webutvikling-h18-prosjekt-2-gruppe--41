import React,{Component} from "react";


class CategoryList extends Component {

    render(){

        return(
        <div className={"categories"}>
            Picture
            <form>
                <div>
                    <input type={"radio"} name={"picture"} value={"green"} defaultChecked onChange={() => {this.props.onCategoryChange("picture","green")}}/> Green
                </div>
                <div>
                    <input type={"radio"} name={"picture"} value={"red"} onChange={() => {this.props.onCategoryChange("picture","red")}}/> Red
                </div>
                <div>
                    <input type={"radio"} name={"picture"} value={"blue"} onChange={() => {this.props.onCategoryChange("picture","blue")}}/> Blue
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