import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Category from "./Category.jsx"
import { useRef, useState } from "react";

function App() {
    const [categories, setCategories] = useState([]);
    const inputRef = useRef();

    function addCategory() {
        let currentInputText = inputRef.current.value || undefined;
        setCategories([...categories, { text: currentInputText, id: Date.now() }]);
    }

    function handleDelete(id) {
        setCategories(
            categories.filter((item) => {
                return item.id !== id;
            })
        );
    }

  return (
    <>
        <div className="container board mt-3">
            <div className="row text-center">
                <h1>Grocery List</h1>
                <p>
                    Click Add to add a new Category and click a Cancel Icon to cross it off!
                </p>
            </div>
            <div className="row justify-center text-center">
                {categories.map((category, index) => {
                    return (
                        <Category
                            key={index}
                            text={category.text}
                            handleDelete={() => handleDelete(category.id)}
                        />
                    );
                })}
            </div>
            {/*<div className="row justify-center text-center">*/}
            {/*    <Category  groceryitems={["Tomatoes","Carrot","Potatoes"]}/>*/}
            {/*    <Category  groceryitems={["Milk","Half & Half","Creamer"]}/>*/}
            {/*    <Category  groceryitems={["Chicken","Fish","Shrimp"]}/>*/}
            {/*</div>*/}
            <div className="row mt-3 d-flex justify-content-center">
                <div className="col-md-6 ">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            ref={inputRef}
                            className="form-control"
                            placeholder="Write Category Task here..."
                            aria-label="CategoryInput"
                        />
                        <div className="input-group-append">
                            <button
                                onClick={addCategory}
                                className="btn btn-primary h-100 m-0"
                                type="button"
                            >
                                Add Category
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
