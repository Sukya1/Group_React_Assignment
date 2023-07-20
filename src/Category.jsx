import {useRef, useState} from "react";
import "./Category.css";
import PropTypes from "prop-types";
import GroceryItem from "./GroceryItem.jsx";

function Category(props){
    const [isCompleted, setIsCompleted] = useState(false);

    const [groceryitems, setGroceryItems] = useState([]);
    const inputRef = useRef();

    function addGroceryItem() {
        let currentInputText = inputRef.current.value || undefined;
        console.log(currentInputText);
        setGroceryItems([...groceryitems, { text: currentInputText, id: Date.now() }]);
    }

    function handleGroceryItemDelete(id) {
        setGroceryItems(
            groceryitems.filter((item) => {
                return item.id !== id;
            })
        );
    }
    return (
        <div className="row gy-3">
            <div
                onClick={() => setIsCompleted(!isCompleted)}
                style={isCompleted ? { backgroundColor: "gray" } : {}}
                className="col-md-8 category m-auto"
            >
                <div className="row pt-3 text-box">
                    {/* Note that we are using an embedded JS expression in our JSX */}
                    <p
                        style={isCompleted ? { textDecoration: "line-through" } : {}}
                        className="text"
                    >
                        {props.text}
                    </p>
                </div>
                {/*<div className="row justify-center text-center">*/}
                {/*    <GroceryItem text={props.groceryitems[0]}/>*/}
                {/*    <GroceryItem text={props.groceryitems[1]}/>*/}
                {/*    <GroceryItem text={props.groceryitems[2]}/>*/}
                {/*</div>*/}
                {/*<div className="row mt-3 d-flex justify-content-center">*/}
                {/*    <div className="col-md-6 ">*/}
                {/*        <div className="input-group mb-3">*/}
                {/*            <input*/}
                {/*                type="text"*/}
                {/*                className="form-control"*/}
                {/*                placeholder="Write Grocery Item here..."*/}
                {/*                aria-label="GroceryItem"*/}
                {/*            />*/}
                {/*            <div className="input-group-append">*/}
                {/*                <button className="btn btn-primary h-100 m-0" type="button">*/}
                {/*                    Add Grocery Item*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="row justify-center text-center">
                    {groceryitems.map((groceryitem, index) => {
                        return (
                            <GroceryItem
                                key={index}
                                text={groceryitem.text}
                                handleGroceryItemDelete={() => handleGroceryItemDelete(groceryitem.id)}
                            />
                        );
                    })}
                </div>
                <div className="row mt-3 d-flex justify-content-center">
                    <div className="col-md-6 ">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                ref={inputRef}
                                className="form-control"
                                placeholder="Write Grocery Item here..."
                                aria-label="GroceryItemInput"
                            />
                            <div className="input-group-append">
                                <button
                                    onClick={addGroceryItem}
                                    className="btn btn-primary h-100 m-0"
                                    type="button"
                                >
                                    Add Grocery Item
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2 p-0">
                        <button
                            onClick={props.handleDelete}
                            className="btn btn-danger w-75 px-0 m-0 my-1"
                        >
                            Delete Category
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
Category.defaultProps = {
    text: "Untitled Category Item",
    handleDelete: {},
    groceryitems: []
};

Category.propTypes = {
    text: PropTypes.string.isRequired,
    handleDelete: PropTypes.object.isRequired,
    groceryitems: PropTypes.array.isRequired
};

export default Category;