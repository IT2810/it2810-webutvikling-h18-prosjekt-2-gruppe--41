import React,{Component} from "react";

class CategoryList extends Component {

    render(){

        return(
        <div className={"categories"}>
          <div className="category">
            <h2>Picture</h2>
            <form class="form">
                <div className="inputGroup">
                    <input type={"radio"} name={"pictureCategory"} value={"green"} defaultChecked onChange={() => {this.props.onCategoryChange("pictureCategory","green")}}/> Green
                </div>
                <div className="inputGroup">
                    <input type={"radio"} name={"pictureCategory"} value={"red"} onChange={() => {this.props.onCategoryChange("pictureCategory","red")}}/> Red
                </div>
                <div className="inputGroup">
                    <input type={"radio"} name={"pictureCategory"} value={"blue"} onChange={() => {this.props.onCategoryChange("pictureCategory","blue")}}/> Blue
                </div>
            </form>
            <br/>
            Text
            <form>
                <div>
                    <input type={"radio"} name={"textCategory"} defaultChecked value={"haiku"} onChange={() => {this.props.onCategoryChange("textCategory","haiku")}}/> Haiku
                </div>
                <div>
                    <input type={"radio"} name={"textCategory"} value={"songs"} onChange={() => {this.props.onCategoryChange("textCategory","songs")}}/> Songs
                </div>
                <div>
                    <input type={"radio"} name={"textCategory"} value={"poem"} onChange={() => {this.props.onCategoryChange("textCategory","poem")}}/> Poem
                </div>
            </form>
          </div>

          <div className="category">
            <h2>Sound</h2>
            <form class="form">
                <div className="inputGroup">
                    <input type={"radio"} name={"soundCategory"} defaultChecked value={"instrument"} onChange={() => {this.props.onCategoryChange("soundCategory","instrument")}}/> Instrument
                </div>
                <div className="inputGroup">
                    <input type={"radio"} name={"soundCategory"} value={"animal"} onChange={() => {this.props.onCategoryChange("soundCategory","animal")}}/> Animal
                </div>
                <div className="inputGroup">
                    <input type={"radio"} name={"soundCategory"} value={"nature"} onChange={() => {this.props.onCategoryChange("soundCategory","nature")}}/> Nature
                </div>
            </form>
          </div>

        </div>
        );
    }

}

export default CategoryList;