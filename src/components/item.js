import React from 'react';

const Item = ({picture,text,sound,onTabClicked}) => {
    return(
        <div className={"item"} onClick={() => onTabClicked({picture:picture,text:text,sound:sound})}>
            Item
        </div>
    );
};

export default Item;