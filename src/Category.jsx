import { useState } from "react";
import "./Category.css";
import PropTypes from "prop-types";

function Category({text,handleDelete}){
    const [isCompleted, setIsCompleted] = useState(false);
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
                        {text}
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-2 p-0">
                        <button
                            onClick={handleDelete}
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
    text: "Untitled To Do Item",
    handleDelete: {}
};

Category.propTypes = {
    text: PropTypes.string.isRequired,
    handleDelete: PropTypes.object.isRequired
};

export default Category;