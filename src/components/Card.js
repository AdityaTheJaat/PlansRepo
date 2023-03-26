import { useState } from "react";

function Card({id, name, info, image, price, removeTour}){
    const [readMore, setReadMore]=useState(false);
    const desc=readMore ? info : `${info.substring(0, 200)}....`;
    function change(){
        setReadMore(!readMore);
    }
    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div>
                <div className="tour-info">
                    <h3 className="tour-price">{price}</h3>
                    <h3 className="tour-name">{name}</h3>
                </div>
                <div className="description">
                    {desc}
                    <span className="read-more" onClick={change}>
                        {readMore ? `show less` : `show more`}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={()=>removeTour(id)}>Not Interested</button>
        </div>
    )
};
export default Card;