import React,{Component} from "react";


class CategoryList extends Component {

    render(){

        return(
        <div className={"categories"}>
            Category 1
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