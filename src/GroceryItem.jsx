import "./GroceryItem.css";
import PropTypes from "prop-types";
import {useState} from "react";


function GroceryItem(props) {

    const [isCompleted, setIsCompleted] = useState(false);


    function handleChildClick(e) {
        setIsCompleted(!isCompleted);
        e.stopPropagation();
    }

    return (
        <div className="row gy-3">
            <div
                onClick={handleChildClick}
                style={isCompleted ? {backgroundColor: "gray"} : {}}
                className="col-md-8 groceryitem m-auto"
            >
                <div className="row pt-3 text-box">

                    <p
                        style={isCompleted ? {textDecoration: "line-through"} : {}}
                        className="text"
                    >
                        {props.text}
                    </p>
                </div>

                <div className="row">
                    <div className="col-md-2 p-0">
                        <button
                            onClick={props.handleGroceryItemDelete}
                            className="btn btn-danger w-75 px-0 m-0 my-1"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

GroceryItem.defaultProps = {
    text: "Untitled To Do Item",
    handleGroceryItemDelete: {}
}

GroceryItem.propTypes = {
    text: PropTypes.string.isRequired,
    handleGroceryItemDelete: PropTypes.object.isRequired
};
export default GroceryItem;
